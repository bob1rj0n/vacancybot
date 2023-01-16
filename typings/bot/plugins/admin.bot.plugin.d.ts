import { Context, Scenes, Telegraf } from "telegraf";
export interface MyContext extends Context {
    session: any;
    scene: Scenes.SceneContextScene<MyContext>;
    Kamina: "Dasturchi";
}
export declare const bot_admin: Telegraf<MyContext>;
export declare const botAdminPlugin: import("fastify").FastifyPluginCallback<any, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault, import("fastify").FastifyBaseLogger>;
