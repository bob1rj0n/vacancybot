import fp from "fastify-plugin";
import mongoose from "mongoose";
import { Context, Scenes, Telegraf, Markup } from "telegraf";
import { session } from "telegraf-session-mongodb";
import { ENV } from "../../common/config";
import { SceneNames } from "../../common/constant/SceneName";
import { adminScene } from "../snece/2.scenes/admin.scene";
import { rejectVacansyScene } from "../snece/2.scenes/reject.scene";


export interface MyContext extends Context {
    session: any;
    scene: Scenes.SceneContextScene<MyContext>;
    Kamina: "Dasturchi"
}

export const bot_admin = new Telegraf<MyContext>(ENV.ADMIN_BOT_TOKEN)

const stages = new Scenes.Stage<MyContext>([
    adminScene,
    rejectVacansyScene,
])

async function start(ctx) {
    if (ctx.from.id == 1661832397) {
        ctx.scene.enter(SceneNames.ADMIN)
    }
}

stages.command('start', start)

async function plugin(server, opt, done) {
    server.post("/" + ENV.ADMIN_BOT_TOKEN, (req, res) => res.reply({ root: true }))
    bot_admin.use(session(mongoose.connection.db, { collectionName: "sessions2", sessionName: "session" }))
    bot_admin.use(stages.middleware())
    // await server.register(require("@fastify/middie"))
    await server.register(bot_admin.webhookCallback("/" + ENV.ADMIN_BOT_TOKEN))
    bot_admin.start(start);
    bot_admin.launch()
    done()
}

export const botAdminPlugin = fp(plugin);
