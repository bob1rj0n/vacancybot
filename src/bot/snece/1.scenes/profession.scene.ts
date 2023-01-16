import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const professionScene = new Scenes.BaseScene<MyContext>(SceneNames.PROFESSION);

professionScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.EnterProfession[lang])
})

professionScene.on('text', async (ctx) => {
    ctx.session.profession = ctx.message.text;
    await ctx.scene.enter(SceneNames.TIME_TO_CALL)
})
