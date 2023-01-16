import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const timeToCallScene = new Scenes.BaseScene<MyContext>(SceneNames.TIME_TO_CALL);

timeToCallScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.TimeToCall[lang])
})

timeToCallScene.on('text', async (ctx) => {
    ctx.session.timeToCall = ctx.message.text;
    await ctx.scene.enter(SceneNames.GOAL)
})
