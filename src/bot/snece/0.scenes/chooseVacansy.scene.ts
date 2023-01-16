import { Markup, Scenes } from "telegraf";
import { Buttons, Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { MyContext } from "../../plugins/bot.plugin";

export const chooseVacansyScene = new Scenes.BaseScene<MyContext>(SceneNames.CHOOSE_VACANSY)

chooseVacansyScene.enter(async (ctx) => {
    const user = await UserModel.findOne({ chatId: ctx.from.id })
    const language = user.language;
    const buttons = []
    buttons.push([
        Markup.button.callback(Buttons.ChooseVacansy[language]["👨‍💻"], "👨‍💻"),
        Markup.button.callback(Buttons.ChooseVacansy[language]["🏢"], "🏢")
    ])

    await ctx.replyWithHTML(Messages.Meny[language], Markup.keyboard(buttons).resize(true))
})

///xodim kerak
chooseVacansyScene.hears(/👨‍💻/, async (ctx) => {
    ctx.session.vacancyType = "findHr";
    await ctx.scene.enter(SceneNames.OFFICE_NAME)
})

///ish joyi kerak
chooseVacansyScene.hears(/🏢/, async (ctx) => {
    ctx.session.vacancyType = "findWork";
    await ctx.scene.enter(SceneNames.NAME)
})
