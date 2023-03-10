import { Markup, Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { MyContext } from "../../plugins/bot.plugin";

export const chooseLanguageScene = new Scenes.BaseScene<MyContext>(SceneNames.CHOOSE_LANGUAGE)

chooseLanguageScene.enter(async (ctx) => {
    const buttons = []
    let button = []
    button.push(Markup.button.callback("๐บ๐ฟ Uzbek", "๐บ๐ฟ"), Markup.button.callback("๐ฌ๐ง English", "๐ฌ๐ง"), Markup.button.callback("๐ท๐บ ะ ัััะบะธะน", "๐ท๐บ"))
    buttons.push(button)
    await ctx.replyWithHTML(`
    <b> ๐บ๐ฟ : Assalomu Alaykum๐</b>
<b>Tilni tanlang</b>

<b>๐ท๐บ : ะัะธะฒะตั๐</b>
<b>ะัะฑะตัะธัะต ัะทัะบ</b>

<b>๐ฌ๐ง : Hello๐</b>
<b>Select a language</b>
`
        , Markup.keyboard(buttons).resize(true))
})

chooseLanguageScene.hears(/๐บ๐ฟ/, async (ctx) => {
    ctx.session.language = "uz"

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "uz" })

    await ctx.scene.enter(SceneNames.PHONE_NUMBER)
})

chooseLanguageScene.hears(/๐ฌ๐ง/, async (ctx) => {
    ctx.session.language = "en"

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "en" })

    await ctx.scene.enter(SceneNames.PHONE_NUMBER)
})

chooseLanguageScene.hears(/๐ท๐บ/, async (ctx) => {
    ctx.session.language = "ru"

    await UserModel.updateOne({ userId: ctx.from.id }, { language: "ru" })

    await ctx.scene.enter(SceneNames.PHONE_NUMBER)
})
