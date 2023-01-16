import { model } from "mongoose";
import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { MyContext } from "../../plugins/bot.plugin";


export const phoneNumberScene = new Scenes.BaseScene<MyContext>(SceneNames.PHONE_NUMBER);

phoneNumberScene.enter(async (ctx) => {
    let buttons = [];
    const language = ctx.session.language
    buttons.push([Markup.button.contactRequest(Messages.PhoneButton[language])])
    await ctx.replyWithHTML(Messages.Phone[language], Markup.keyboard(buttons).resize())
});


phoneNumberScene.on("contact", async (ctx) => {
    const phone = ctx.message.contact.phone_number;

    await UserModel.updateOne({ userId: ctx.from.id }, { phoneNumber: phone })
    await ctx.scene.enter(SceneNames.MAIN)

});

