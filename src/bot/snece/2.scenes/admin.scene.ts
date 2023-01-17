import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { FindHrVacansyModel } from "../../../common/db/model/findHrVacansy.model";
import { UserModel } from "../../../common/db/model/user.model";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { bot, MyContext } from "../../plugins/bot.plugin";


export const adminScene = new Scenes.BaseScene<MyContext>(SceneNames.ADMIN)

adminScene.enter(async (ctx) => {
})
adminScene.action('✅', async ctx => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] })

    let Msg, msg;
    const a = (await VacancyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    const b = (await FindHrVacansyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    Msg = a ? a : b;
    const user = (await UserModel.find({ userId: Msg.userId })).shift();
    if (Msg.type == 'findWork') {
        msg = (`
Ish joyi kerak:

👨‍💼 Xodim: ${Msg.name}
🕑 Yosh: ${Msg.age}
👨‍💻 <b>Yo'nalish: ${Msg.direction}</b>
📚 Texnologiya: ${Msg.technology}
🇺🇿 Telegram: @${Msg.tgUsername} 
📱 Aloqa: ${Msg.phone}
📍 Hudud: ${Msg.place}
💸 Maosh: ${Msg.price}
👤 Kasbi: ${Msg.profession}
🕰 Murojaat qilish vaqti: ${Msg.timeToCall}
🔎 Maqsad: ${Msg.goal}

${Msg.hashtegs}

© @${ctx.botInfo.username}
        `)
    }
    if (Msg.type == 'findHr' && Msg.link !== null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${Msg.officeName}
👨‍💻 <b>Yo'nalish: ${Msg.direction}</b>
📚 Texnologiya: ${Msg.technology}
🇺🇿 Telegram: @${Msg.tgUsername} 
📍 Hudud: ${Msg.place}
👤 Mas'ul: ${Msg.responsible}
🕰 Murojaat vaqti: ${Msg.timeToCall}
⏰ Ish vaqti: ${Msg.timeOfWork}
💸 Maosh: ${Msg.price}
📥 Ariza qoldirish: <a href="${Msg.link}">Link</a>

${Msg.hashtegs}

© @bekobod_jobs_bot
        `)
    }
    if (Msg.type == 'findHr' && Msg.link === null){
        msg = (`
Xodim kerak:

🏢 Idora: ${Msg.officeName}
👨‍💻 <b>Yo'nalish: ${Msg.direction}</b>
📚 Texnologiya: ${Msg.technology}
🇺🇿 Telegram: @${Msg.tgUsername} 
📍 Hudud: ${Msg.place}
👤 Mas'ul: ${Msg.responsible}
🕰 Murojaat vaqti: ${Msg.timeToCall}
⏰ Ish vaqti: ${Msg.timeOfWork}
💸 Maosh: ${Msg.price}

${Msg.hashtegs}

© @${ctx.botInfo.username}
        `)
    }
    const vacCahn = await ctx.telegram.sendPhoto(
        "@bekobod_job",
        {
            source: Msg.img
        },
        {
            caption: msg,
            parse_mode: "HTML"
        }
    );

    await bot.telegram.sendMessage(
        Msg.userId,
        Messages.PostedByAdmin[user.language],
        {
            parse_mode: "HTML",
            reply_to_message_id: Msg.userMsgId,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Link", url: `https://t.me/bekobod_job/${vacCahn.message_id}`
                        }
                    ]
                ]
            }
        }
    )
    await ctx.replyWithHTML(`Vakansiya kanalga joylandi!`)
})


adminScene.action('❌', async ctx => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] })

    const Msg = (await VacancyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();

    ctx.session.rejectedMsg = Msg;
    await ctx.scene.enter(SceneNames.REJECT_VACANSY);
})
