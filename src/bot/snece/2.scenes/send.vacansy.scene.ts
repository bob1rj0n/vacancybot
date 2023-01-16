import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { FindHrVacansyModel } from "../../../common/db/model/findHrVacansy.model";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { addTextOnImage, TelegrafApi } from "../../../common/service/functions";
import { bot, MyContext } from "../../plugins/bot.plugin";
import Telegraph from "telegraph-node";
import { bot_admin } from "../../plugins/admin.bot.plugin";

export const sendToAdminScene = new Scenes.BaseScene<MyContext>(SceneNames.SEND_TO_ADMIN);

const ph = new Telegraph();

sendToAdminScene.enter(async (ctx) => {
    const lang = ctx.session.language;

    let buttons = [];
    buttons.push([Markup.button.callback("✅ Ha", "✅"), Markup.button.callback("❌ Yo'q", "❌")]);

    const img = await addTextOnImage(ctx.session);

    await ctx.replyWithHTML(Messages.CheckAndSendVacancy[lang]);
    let msg;
    if (ctx.session.vacancyType == "findWork") {
        msg = (`
Ish joyi kerak:

👨‍💼 Xodim: ${ctx.session.name}
🕑 Yosh: ${ctx.session.age}
👨‍💻 <b>Yo'nalish: ${ctx.session.direction}</b>
📚 Texnologiya: ${ctx.session.technology}
🇺🇿 Telegram: @${ctx.from.username}
📞 Aloqa: ${ctx.session.connect}
🌐 Hudud: ${ctx.session.place}
💰 Maosh: ${ctx.session.price}
👨🏻‍💻 Kasbi: ${ctx.session.profession}
🕰 Murojaat qilish vaqti: ${ctx.session.timeToCall}
🔎 Maqsad: ${ctx.session.goal}

© @${ctx.botInfo.username}
`)
    }
    if (ctx.session.vacancyType == "findHr") {
        msg = (`
Xodim kerak:

🏢 Idora: ${ctx.session.officeName}
👨‍💻 <b>Yo'nalish: ${ctx.session.direction}</b>
📚 Texnologiya: ${ctx.session.technology_2}
🇺🇿 Telegram: @${ctx.from.username} 
🌐 Hudud: ${ctx.session.place_2}
✍️ Mas'ul: ${ctx.session.responsible}
🕰 Murojaat vaqti: ${ctx.session.timeToCall_2}
🕰 Ish vaqti: ${ctx.session.timeOfWork}
💰 Maosh: ${ctx.session.price_2}

© @${ctx.botInfo.username}
        `)
    }
    ctx.session.msg = msg;

    const uMsg = await ctx.replyWithPhoto({ source: img },
        {
            caption: msg,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: buttons
            }
        }
    );
    ctx.session.userMsgId = uMsg.message_id;
    ctx.session.img = img;
    console.log("send vacancy scene : ", ctx.session)

})

sendToAdminScene.action(/✅/, async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] })
    const lang = ctx.session.language;

    let buttons = [];
    buttons.push([Markup.button.callback("✅ Ha", "✅"), Markup.button.callback("❌ Yo'q", "❌")]);

    let vac;
    if (ctx.session.vacancyType == 'findWork') {
        let data = {
            userId: ctx.from.id,
            direction: ctx.session.direction,
            name: ctx.session.name,
            age: ctx.session.age,
            technology: ctx.session.technology,
            tgUsername: ctx.from.username,
            phone: ctx.session.connect,
            place: ctx.session.place,
            // minSum: ctx.session.minSum,
            // maxSum: ctx.session.maxSum,
            price: ctx.session.price,
            profession: ctx.session.profession,
            timeToCall: ctx.session.timeToCall,
            goal: ctx.session.goal,
            userMsgId: ctx.session.userMsgId,
            img: ctx.session.img
        }
        vac = await VacancyModel.create(data);
    }
    if (ctx.session.vacancyType == 'findHr') {
        let data = {
            userId: ctx.from.id,
            direction: ctx.session.direction,
            officeName: ctx.session.officeName,
            technology: ctx.session.technology_2,
            responsible: ctx.session.responsible,
            place: ctx.session.place_2,
            price: ctx.session.price_2,
            tgUsername: ctx.from.username ? ctx.from.username : null,
            timeOfWork: ctx.session.timeOfWork,
            timeToCall: ctx.session.timeToCall_2,
            // minPrice: ctx.session.minPrice,
            // maxPrice: ctx.session.maxPrice,
            userMsgId: ctx.session.userMsgId,
            addition: ctx.session.addition ? ctx.session.addition : null,
            img: ctx.session.img
        }
        vac = await FindHrVacansyModel.create(data);
    }
    const vacInAdmin = await bot_admin.telegram.sendPhoto(
        651985244,
        {
            source: ctx.session.img
        },
        {
            caption: `✅ Malumotlarni tasdiqlang\n${ctx.session.msg}`,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: buttons
            }
        }
    );

    ctx.session.vacancyType == 'findWork'
        ? await VacancyModel.updateOne({ _id: vac._id }, { messageId: vacInAdmin.message_id })
        : await FindHrVacansyModel.updateOne({ _id: vac._id }, { messageId: vacInAdmin.message_id });


    await ctx.replyWithHTML(Messages.SendToAdmin[lang]);
    await ctx.scene.enter(SceneNames.MAIN)
})

sendToAdminScene.action(/❌/, async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] })

    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Canceled[lang])
    await ctx.scene.enter(SceneNames.MAIN)
})
