import fp from "fastify-plugin";
import mongoose from "mongoose";
import { Context, Scenes, Telegraf, Markup } from "telegraf";
import { session } from "telegraf-session-mongodb";
import { ENV } from "../../common/config";
import { SceneNames } from "../../common/constant/SceneName";
import { UserModel } from "../../common/db/model/user.model";
import { mainScene } from "../snece/0.scenes/main.scene";
import { ageScene } from "../snece/1.scenes/age.scene";
import { connectScene } from "../snece/1.scenes/connect.scene";
import { goalScene } from "../snece/1.scenes/goal.scene";
import { nameScene } from "../snece/1.scenes/name.scene";
import { placeScene } from "../snece/1.scenes/place.scene";
import { professionScene } from "../snece/1.scenes/profession.scene";
import { technologyScene } from "../snece/1.scenes/technology.scene";
import { timeToCallScene } from "../snece/1.scenes/timeToCall.scene";
import { sendToAdminScene } from "../snece/2.scenes/send.vacansy.scene";
import { phoneNumberScene } from "../snece/register/phone.scene";
import { chooseLanguageScene } from "../snece/register/chooseLanguage.scene";
import { botStart } from "../servers/bot.start";
import { chooseVacansyScene } from "../snece/0.scenes/chooseVacansy.scene";
import { officeNameScene } from "../snece/3.scenes/officeName.scene";
import { technology2Scene } from "../snece/3.scenes/technology.scene";
import { place2Scene } from "../snece/3.scenes/place.scene";
import { timeToCall2Scene } from "../snece/3.scenes/timeToCall.scene";
import { timeOfWorkScene } from "../snece/3.scenes/timeOfWork.scene";
import { responsibleScene } from "../snece/3.scenes/responsible.scene";
import { changeLanguageScene } from "../snece/0.scenes/changeLanguage.scene";
import { priceScene } from "../snece/1.scenes/price.scene";
import { directionScene } from "../snece/1.scenes/direction.scene";
import { direction2Scene } from "../snece/3.scenes/direction.scene";
import { myVacancyScene } from "../snece/4.scenes/myVacancy.scene";
import { privacyScene } from "../snece/0.scenes/privacy.scene";
import { price2Scene } from "../snece/3.scenes/price.scene";
import { linkScene } from "../snece/3.scenes/link.scene";
import { enterLinkScene } from "../snece/3.scenes/enterLink.scene";

export interface MyContext extends Context {
    session: any;
    scene: Scenes.SceneContextScene<MyContext>;
    Kamina: "Dasturchi"
}

export const bot = new Telegraf<MyContext>(ENV.BOT_TOKEN)

const stages = new Scenes.Stage<MyContext>([
    ///for register
    chooseLanguageScene,
    phoneNumberScene,

    ///scenes
    mainScene,
    nameScene,
    ageScene,
    technologyScene,
    placeScene,
    connectScene,
    professionScene,
    timeToCallScene,
    goalScene,
    sendToAdminScene,
    chooseVacansyScene,
    directionScene,

    ///hodim kk
    officeNameScene,
    technology2Scene,
    place2Scene,
    timeToCall2Scene,
    timeOfWorkScene,
    responsibleScene,
    changeLanguageScene,
    priceScene,
    direction2Scene,
    myVacancyScene,
    privacyScene,
    price2Scene,
    linkScene,
    enterLinkScene
])

stages.command('start', botStart)

async function plugin(server, opt, done) {
    server.post("/" + ENV.BOT_TOKEN, (req, res) => res.reply({ root: true }))
    bot.use(session(mongoose.connection.db, { collectionName: "sessions", sessionName: "session" }))
    bot.use(stages.middleware())
    await server.register(require("@fastify/middie"))
    await server.register(bot.webhookCallback("/" + ENV.BOT_TOKEN))
    bot.start(botStart);
    bot.launch()
    done()
}

export const botPlugin = fp(plugin);
