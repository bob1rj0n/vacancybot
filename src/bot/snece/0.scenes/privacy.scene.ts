import { Markup, Scenes } from "telegraf";
import { Buttons, Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { MyContext } from "../../plugins/bot.plugin";

export const privacyScene = new Scenes.BaseScene<MyContext>(SceneNames.PRIVACY)

privacyScene.enter(async (ctx) => {
    await ctx.reply(`Ushbu bot orqali oson IT vakansiyalar tayyorlashingiz mumkin. 
Vakansiya admin tomonidan tekshirilgandan so'ng @IT_vacansy kanaliga joylashtiriladi.
Boshlash uchun '📉 Vakansiya joylash' tugmasini bosing, savollarga javob bering va o'z vakansiyangizni tayyorlang.
`)
    await ctx.scene.enter(SceneNames.MAIN)
})
