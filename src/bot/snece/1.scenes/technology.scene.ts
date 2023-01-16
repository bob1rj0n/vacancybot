import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { generateHashtag } from "../../../common/service/functions";
import { MyContext } from "../../plugins/bot.plugin";

export const technologyScene = new Scenes.BaseScene<MyContext>(SceneNames.TECHNOLOGY);

technologyScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Technology[lang]);
})

technologyScene.on('text', async (ctx) => {
    let tech = ctx.message.text;
    ctx.session.hashtegs = await generateHashtag(`Xodim, ${tech}`);
    ctx.session.technology = tech;
    await ctx.scene.enter(SceneNames.CONNECT);
})
