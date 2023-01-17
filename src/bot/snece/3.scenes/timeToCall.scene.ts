import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const timeToCall2Scene = new Scenes.BaseScene<MyContext>(SceneNames.TIME_TO_CALL_2);

timeToCall2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.TimeToCall[lang])
})

timeToCall2Scene.on('text', async (ctx) => {
    ctx.session.timeToCall_2 = ctx.message.text;
    // await ctx.scene.enter(SceneNames.TIME_OF_WORK)
    await ctx.scene.enter(SceneNames.LINK)
})
