import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const nameScene = new Scenes.BaseScene<MyContext>(SceneNames.NAME);

nameScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.FIO[lang], Markup.removeKeyboard())
})

nameScene.on('text', async (ctx) => {
    ctx.session.name = ctx.message.text;
    await ctx.scene.enter(SceneNames.AGE)
})
