import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const technologyScene = new Scenes.BaseScene<MyContext>(SceneNames.TECHNOLOGY);

technologyScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Technology[lang]);
})

technologyScene.on('text', async (ctx) => {
    ctx.session.technology = ctx.message.text;
    await ctx.scene.enter(SceneNames.CONNECT);
})
