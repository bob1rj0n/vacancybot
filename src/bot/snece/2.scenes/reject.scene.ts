import { Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { bot, MyContext } from "../../plugins/bot.plugin";

export const rejectVacansyScene = new Scenes.BaseScene<MyContext>(SceneNames.REJECT_VACANSY);

rejectVacansyScene.enter(async (ctx) => {
    const Msg = ctx.session.rejectedMsg;
    const user = (await UserModel.find({ userId: Msg.userId })).shift();

    console.log("reject scene session : ", ctx.session);

    await ctx.reply(
        `Vakansiya bekor qilindi sababini kiriting!\nFoydalanuvchi tili : ${user.language}`,
        {
            reply_to_message_id: Msg.message_id
        }
    );
})

rejectVacansyScene.on('text', async (ctx) => {
    const sabab = ctx.message.text;
    const Msg = ctx.session.rejectedMsg;
    const user = (await UserModel.find({ userId: Msg.userId })).shift();
    await bot.telegram.sendMessage(
        Msg.userId,
        (
            user.language == 'uz'
                ? `Vakansiyangiz bekor qilindi!\nSababi : ${sabab}`
                : user.language == 'ru'
                    ? `Ваша вакансия была отменена!\nПричина: ${sabab}`
                    : ` Your vacancy has been cancelled!\nReason : ${sabab}`
        ),
        {
            reply_to_message_id: Msg.userMsgId
        }
    )
    await ctx.reply("Xabar foydalanuvchiga yuborildi!")
    await ctx.scene.enter(SceneNames.ADMIN)
})
