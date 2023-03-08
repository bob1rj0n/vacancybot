import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { addTextOnImage } from "../../../common/service/functions";
import { MyContext } from "../../plugins/bot.plugin";

export const changeLanguageScene = new Scenes.BaseScene<MyContext>(SceneNames.CHANGE_LANGUAGE);

changeLanguageScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    const buttons = []
    buttons.push([Markup.button.callback("🇺🇿 Uzbek", "🇺🇿"), Markup.button.callback("🇺🇸 English", "🇺🇸"), Markup.button.callback("🇷🇺 Русский", "🇷🇺")])
    await ctx.reply(Messages.Language[lang], Markup.keyboard(buttons).resize(true));
})


changeLanguageScene.hears(/🇺🇿/, async (ctx) => {
    ctx.session.language = "uz"
    // await ctx.deleteMessage(ctx.message?.message_id)

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "uz" })

    await ctx.scene.enter(SceneNames.MAIN)
})

changeLanguageScene.hears(/🇺🇸/, async (ctx) => {
    ctx.session.language = "en"
    // await ctx.deleteMessage(ctx.message?.message_id)

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "en" })

    await ctx.scene.enter(SceneNames.MAIN)
})

changeLanguageScene.hears(/🇷🇺/, async (ctx) => {
    ctx.session.language = "ru"
    // await ctx.deleteMessage(ctx.message?.message_id)

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "ru" })

    await ctx.scene.enter(SceneNames.MAIN)
})
