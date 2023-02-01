import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { FindHrVacansyModel } from "../../../common/db/model/findHrVacansy.model";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { getVacancy } from "../../../common/service/functions";
import { bot, MyContext } from "../../plugins/bot.plugin";
import { bot_admin } from "../../plugins/admin.bot.plugin";

export const sendToAdminScene = new Scenes.BaseScene<MyContext>(SceneNames.SEND_TO_ADMIN);


sendToAdminScene.enter(async (ctx) => {
    const lang = ctx.session.language;

    let buttons = [];
    buttons.push([Markup.button.callback("✅ Ha", "✅"), Markup.button.callback("❌ Yo'q", "❌")]);

    await ctx.replyWithHTML(Messages.CheckAndSendVacancy[lang]);
    let msg = await getVacancy(ctx.session);
    ctx.session.msg = msg;

    const uMsg = await ctx.replyWithPhoto({ source: "./uploads/image.jpg" },
        {
            caption: msg,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: buttons
            }
        }
    );
    ctx.session.userMsgId = uMsg.message_id;
    ctx.session.img = "./uploads/image.jpg";
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
            phone: ctx.session.phone,
            place: ctx.session.place,
            price: ctx.session.price,
            profession: ctx.session.profession,
            timeToCall: ctx.session.timeToCall,
            goal: ctx.session.goal,
            userMsgId: ctx.session.userMsgId,
            img: ctx.session.img,
            hashtegs: ctx.session.hashtegs,
            vacancyType: ctx.session.vacancyType
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
            userMsgId: ctx.session.userMsgId,
            addition: ctx.session.addition ? ctx.session.addition : null,
            img: ctx.session.img,
            hashtegs: ctx.session.hashtegs,
            link: ctx.session.link,
            vacancyType: ctx.session.vacancyType
        }
        vac = await FindHrVacansyModel.create(data);
    }
    const vacInAdmin = await bot_admin.telegram.sendPhoto(
        // 651985244,
        1661832397,
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
