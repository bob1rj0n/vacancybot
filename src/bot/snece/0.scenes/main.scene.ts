import { Markup, Scenes } from "telegraf";
import { Buttons, Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { MyContext } from "../../plugins/bot.plugin";

export const mainScene = new Scenes.BaseScene<MyContext>(SceneNames.MAIN)

mainScene.enter(async (ctx) => {
    const user = await UserModel.findOne({ userId: ctx.from.id })
    if (user) {
        await UserModel.updateOne(
            {
                userId: user.userId
            },
            {
                $set: {
                    userId: ctx.from.id,
                    firstName: ctx.from.first_name,
                    userName: ctx.from.username,
                    language: ctx.session.language
                }
            }
        )
    }
    const language = user.language;
    const buttons = []
    buttons.push([Markup.button.callback(Buttons.Main[language]["📉"], "📉")])
    buttons.push([Markup.button.callback(Buttons.Main[language]["📝"], "📝"), Markup.button.callback(Buttons.Main[language]["🔄"], "🔄")])
    // buttons.push([Markup.button.callback(Buttons.Main[language]["📃"], "📃")])

    await ctx.replyWithHTML(Messages.Meny[language], Markup.keyboard(buttons).resize(true))
})

mainScene.hears(/🔄/, async (ctx) => {
    await ctx.scene.enter(SceneNames.CHANGE_LANGUAGE)
})

mainScene.hears(/📉/, async (ctx) => {
    await ctx.scene.enter(SceneNames.CHOOSE_VACANSY)
})
// mainScene.hears(/📃/, async (ctx) => {
//     await ctx.scene.enter(SceneNames.MY_VACANCY)
// })
mainScene.hears(/📝/, async (ctx) => {
    await ctx.scene.enter(SceneNames.PRIVACY)
})
