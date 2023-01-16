import { Markup, Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { MyContext } from "../../plugins/bot.plugin";

export const chooseLanguageScene = new Scenes.BaseScene<MyContext>(SceneNames.CHOOSE_LANGUAGE)

chooseLanguageScene.enter(async (ctx) => {
    const buttons = []
    let button = []
    button.push(Markup.button.callback("🇺🇿 Uzbek", "🇺🇿"), Markup.button.callback("🇬🇧 English", "🇬🇧"), Markup.button.callback("🇷🇺 Русский", "🇷🇺"))
    buttons.push(button)
    await ctx.replyWithHTML(`
    <b> 🇺🇿 : Assalomu Alaykum👋</b>
<b>Tilni tanlang</b>

<b>🇷🇺 : Привет👋</b>
<b>Выберите язык</b>

<b>🇬🇧 : Hello👋</b>
<b>Select a language</b>
`
        , Markup.keyboard(buttons).resize(true))
})

chooseLanguageScene.hears(/🇺🇿/, async (ctx) => {
    ctx.session.language = "uz"

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "uz" })

    await ctx.scene.enter(SceneNames.PHONE_NUMBER)
})

chooseLanguageScene.hears(/🇬🇧/, async (ctx) => {
    ctx.session.language = "en"

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "en" })

    await ctx.scene.enter(SceneNames.PHONE_NUMBER)
})

chooseLanguageScene.hears(/🇷🇺/, async (ctx) => {
    ctx.session.language = "ru"

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "ru" })

    await ctx.scene.enter(SceneNames.PHONE_NUMBER)
})
