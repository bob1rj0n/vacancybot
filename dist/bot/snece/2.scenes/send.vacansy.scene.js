"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToAdminScene = void 0;
const tslib_1 = require("tslib");
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
const findHrVacansy_model_1 = require("../../../common/db/model/findHrVacansy.model");
const vacancy_model_1 = require("../../../common/db/model/vacancy.model");
const telegraph_node_1 = tslib_1.__importDefault(require("telegraph-node"));
const admin_bot_plugin_1 = require("../../plugins/admin.bot.plugin");
exports.sendToAdminScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.SEND_TO_ADMIN);
const ph = new telegraph_node_1.default();
exports.sendToAdminScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    let buttons = [];
    buttons.push([telegraf_1.Markup.button.callback("✅ Ha", "✅"), telegraf_1.Markup.button.callback("❌ Yo'q", "❌")]);
    // const img = await addTextOnImage(ctx.session);
    await ctx.replyWithHTML(messages_1.Messages.CheckAndSendVacancy[lang]);
    let msg;
    if (ctx.session.vacancyType == "findWork") {
        msg = (`
Ish joyi kerak:

👨‍💼 Xodim: ${ctx.session.name}
🕑 Yosh: ${ctx.session.age}
👨‍💻 <b>Yo'nalish: ${ctx.session.direction}</b>
📚 Texnologiya: ${ctx.session.technology}
🇺🇿 Telegram: @${ctx.from.username}
📱 Aloqa: ${ctx.session.connect}
📍 Hudud: ${ctx.session.place}
💸 Maosh: ${ctx.session.price}
👤 Kasbi: ${ctx.session.profession}
🕰 Murojaat qilish vaqti: ${ctx.session.timeToCall}
🔎 Maqsad: ${ctx.session.goal}

${ctx.session.hashtegs}

© @${ctx.botInfo.username}
`);
    }
    if (ctx.session.vacancyType == "findHr" && ctx.session.link !== null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${ctx.session.officeName}
👨‍💻 <b>Yo'nalish: ${ctx.session.direction}</b>
📚 Texnologiya: ${ctx.session.technology_2}
🇺🇿 Telegram: @${ctx.from.username} 
📍 Hudud: ${ctx.session.place_2}
👤 Mas'ul: ${ctx.session.responsible}
🕰 Murojaat vaqti: ${ctx.session.timeToCall_2}
⏰ Ish vaqti: ${ctx.session.timeOfWork}
💸 Maosh: ${ctx.session.price_2}
📥 Ariza qoldirish: <a href="${ctx.session.link}">Link</a>

${ctx.session.hashtegs}

© @${ctx.botInfo.username}
        `);
    }
    if (ctx.session.vacancyType == "findHr" && ctx.session.link === null) {
        msg = (`
Xodim kerak:

🏢 Idora: ${ctx.session.officeName}
👨‍💻 <b>Yo'nalish: ${ctx.session.direction}</b>
📚 Texnologiya: ${ctx.session.technology_2}
🇺🇿 Telegram: @${ctx.from.username} 
📍 Hudud: ${ctx.session.place_2}
👤 Mas'ul: ${ctx.session.responsible}
🕰 Murojaat vaqti: ${ctx.session.timeToCall_2}
⏰ Ish vaqti: ${ctx.session.timeOfWork}
💸 Maosh: ${ctx.session.price_2}

${ctx.session.hashtegs}

© @${ctx.botInfo.username}
        `);
    }
    ctx.session.msg = msg;
    const uMsg = await ctx.replyWithPhoto({ source: "./uploads/image.jpg" }, {
        caption: msg,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: buttons
        }
    });
    ctx.session.userMsgId = uMsg.message_id;
    ctx.session.img = "./uploads/image.jpg";
    console.log("send vacancy scene : ", ctx.session);
});
exports.sendToAdminScene.action(/✅/, async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
    const lang = ctx.session.language;
    let buttons = [];
    buttons.push([telegraf_1.Markup.button.callback("✅ Ha", "✅"), telegraf_1.Markup.button.callback("❌ Yo'q", "❌")]);
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
            img: ctx.session.img,
            hashtegs: ctx.session.hashtegs
        };
        vac = await vacancy_model_1.VacancyModel.create(data);
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
            img: ctx.session.img,
            hashtegs: ctx.session.hashtegs,
            link: ctx.session.link
        };
        vac = await findHrVacansy_model_1.FindHrVacansyModel.create(data);
    }
    const vacInAdmin = await admin_bot_plugin_1.bot_admin.telegram.sendPhoto(
    // 651985244,
    1661832397, {
        source: ctx.session.img
    }, {
        caption: `✅ Malumotlarni tasdiqlang\n${ctx.session.msg}`,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: buttons
        }
    });
    ctx.session.vacancyType == 'findWork'
        ? await vacancy_model_1.VacancyModel.updateOne({ _id: vac._id }, { messageId: vacInAdmin.message_id })
        : await findHrVacansy_model_1.FindHrVacansyModel.updateOne({ _id: vac._id }, { messageId: vacInAdmin.message_id });
    await ctx.replyWithHTML(messages_1.Messages.SendToAdmin[lang]);
    await ctx.scene.enter(SceneName_1.SceneNames.MAIN);
});
exports.sendToAdminScene.action(/❌/, async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.Canceled[lang]);
    await ctx.scene.enter(SceneName_1.SceneNames.MAIN);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC52YWNhbnN5LnNjZW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2JvdC9zbmVjZS8yLnNjZW5lcy9zZW5kLnZhY2Fuc3kuc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHVDQUEwQztBQUMxQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBQ2hFLHNGQUFrRjtBQUNsRiwwRUFBc0U7QUFHdEUsNEVBQXVDO0FBQ3ZDLHFFQUEyRDtBQUU5QyxRQUFBLGdCQUFnQixHQUFHLElBQUksaUJBQU0sQ0FBQyxTQUFTLENBQVksc0JBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUUxRixNQUFNLEVBQUUsR0FBRyxJQUFJLHdCQUFTLEVBQUUsQ0FBQztBQUUzQix3QkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRWxDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRixpREFBaUQ7SUFFakQsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFJLEdBQUcsQ0FBQztJQUNSLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksVUFBVSxFQUFFO1FBQ3ZDLEdBQUcsR0FBRyxDQUFDOzs7ZUFHQSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUk7V0FDcEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHO3NCQUNK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QUMsSUFBSSxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDLENBQUE7QUFFRix3QkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2QyxNQUFNLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRXpELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2hELE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMxQyxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmt1cCwgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBTY2VuZU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9TY2VuZU5hbWVcIjtcclxuaW1wb3J0IHsgRmluZEhyVmFjYW5zeU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbC9maW5kSHJWYWNhbnN5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFZhY2FuY3lNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBhZGRUZXh0T25JbWFnZSwgVGVsZWdyYWZBcGkgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3NlcnZpY2UvZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGJvdCwgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xyXG5pbXBvcnQgVGVsZWdyYXBoIGZyb20gXCJ0ZWxlZ3JhcGgtbm9kZVwiO1xyXG5pbXBvcnQgeyBib3RfYWRtaW4gfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9hZG1pbi5ib3QucGx1Z2luXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFRvQWRtaW5TY2VuZSA9IG5ldyBTY2VuZXMuQmFzZVNjZW5lPE15Q29udGV4dD4oU2NlbmVOYW1lcy5TRU5EX1RPX0FETUlOKTtcclxuXHJcbmNvbnN0IHBoID0gbmV3IFRlbGVncmFwaCgpO1xyXG5cclxuc2VuZFRvQWRtaW5TY2VuZS5lbnRlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XHJcblxyXG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIuKchSBIYVwiLCBcIuKchVwiKSwgTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIuKdjCBZbydxXCIsIFwi4p2MXCIpXSk7XHJcblxyXG4gICAgLy8gY29uc3QgaW1nID0gYXdhaXQgYWRkVGV4dE9uSW1hZ2UoY3R4LnNlc3Npb24pO1xyXG5cclxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKE1lc3NhZ2VzLkNoZWNrQW5kU2VuZFZhY2FuY3lbbGFuZ10pO1xyXG4gICAgbGV0IG1zZztcclxuICAgIGlmIChjdHguc2Vzc2lvbi52YWNhbmN5VHlwZSA9PSBcImZpbmRXb3JrXCIpIHtcclxuICAgICAgICBtc2cgPSAoYFxyXG5Jc2ggam95aSBrZXJhazpcclxuXHJcbvCfkajigI3wn5K8IFhvZGltOiAke2N0eC5zZXNzaW9uLm5hbWV9XHJcbvCflZEgWW9zaDogJHtjdHguc2Vzc2lvbi5hZ2V9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtjdHguc2Vzc2lvbi5kaXJlY3Rpb259PC9iPlxyXG7wn5OaIFRleG5vbG9naXlhOiAke2N0eC5zZXNzaW9uLnRlY2hub2xvZ3l9XHJcbvCfh7rwn4e/IFRlbGVncmFtOiBAJHtjdHguZnJvbS51c2VybmFtZX1cclxu8J+TsSBBbG9xYTogJHtjdHguc2Vzc2lvbi5jb25uZWN0fVxyXG7wn5ONIEh1ZHVkOiAke2N0eC5zZXNzaW9uLnBsYWNlfVxyXG7wn5K4IE1hb3NoOiAke2N0eC5zZXNzaW9uLnByaWNlfVxyXG7wn5GkIEthc2JpOiAke2N0eC5zZXNzaW9uLnByb2Zlc3Npb259XHJcbvCflbAgTXVyb2phYXQgcWlsaXNoIHZhcXRpOiAke2N0eC5zZXNzaW9uLnRpbWVUb0NhbGx9XHJcbvCflI4gTWFxc2FkOiAke2N0eC5zZXNzaW9uLmdvYWx9XHJcblxyXG4ke2N0eC5zZXNzaW9uLmhhc2h0ZWdzfVxyXG5cclxuwqkgQCR7Y3R4LmJvdEluZm8udXNlcm5hbWV9XHJcbmApXHJcbiAgICB9XHJcbiAgICBpZiAoY3R4LnNlc3Npb24udmFjYW5jeVR5cGUgPT0gXCJmaW5kSHJcIiAmJiBjdHguc2Vzc2lvbi5saW5rICE9PSBudWxsKSB7XHJcbiAgICAgICAgbXNnID0gKGBcclxuWG9kaW0ga2VyYWs6XHJcblxyXG7wn4+iIElkb3JhOiAke2N0eC5zZXNzaW9uLm9mZmljZU5hbWV9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtjdHguc2Vzc2lvbi5kaXJlY3Rpb259PC9iPlxyXG7wn5OaIFRleG5vbG9naXlhOiAke2N0eC5zZXNzaW9uLnRlY2hub2xvZ3lfMn1cclxu8J+HuvCfh78gVGVsZWdyYW06IEAke2N0eC5mcm9tLnVzZXJuYW1lfSBcclxu8J+TjSBIdWR1ZDogJHtjdHguc2Vzc2lvbi5wbGFjZV8yfVxyXG7wn5GkIE1hcyd1bDogJHtjdHguc2Vzc2lvbi5yZXNwb25zaWJsZX1cclxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtjdHguc2Vzc2lvbi50aW1lVG9DYWxsXzJ9XHJcbuKPsCBJc2ggdmFxdGk6ICR7Y3R4LnNlc3Npb24udGltZU9mV29ya31cclxu8J+SuCBNYW9zaDogJHtjdHguc2Vzc2lvbi5wcmljZV8yfVxyXG7wn5OlIEFyaXphIHFvbGRpcmlzaDogPGEgaHJlZj1cIiR7Y3R4LnNlc3Npb24ubGlua31cIj5MaW5rPC9hPlxyXG5cclxuJHtjdHguc2Vzc2lvbi5oYXNodGVnc31cclxuXHJcbsKpIEAke2N0eC5ib3RJbmZvLnVzZXJuYW1lfVxyXG4gICAgICAgIGApXHJcbiAgICB9XHJcbiAgICBpZiAoY3R4LnNlc3Npb24udmFjYW5jeVR5cGUgPT0gXCJmaW5kSHJcIiAmJiBjdHguc2Vzc2lvbi5saW5rID09PSBudWxsKSB7XHJcbiAgICAgICAgbXNnID0gKGBcclxuWG9kaW0ga2VyYWs6XHJcblxyXG7wn4+iIElkb3JhOiAke2N0eC5zZXNzaW9uLm9mZmljZU5hbWV9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtjdHguc2Vzc2lvbi5kaXJlY3Rpb259PC9iPlxyXG7wn5OaIFRleG5vbG9naXlhOiAke2N0eC5zZXNzaW9uLnRlY2hub2xvZ3lfMn1cclxu8J+HuvCfh78gVGVsZWdyYW06IEAke2N0eC5mcm9tLnVzZXJuYW1lfSBcclxu8J+TjSBIdWR1ZDogJHtjdHguc2Vzc2lvbi5wbGFjZV8yfVxyXG7wn5GkIE1hcyd1bDogJHtjdHguc2Vzc2lvbi5yZXNwb25zaWJsZX1cclxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtjdHguc2Vzc2lvbi50aW1lVG9DYWxsXzJ9XHJcbuKPsCBJc2ggdmFxdGk6ICR7Y3R4LnNlc3Npb24udGltZU9mV29ya31cclxu8J+SuCBNYW9zaDogJHtjdHguc2Vzc2lvbi5wcmljZV8yfVxyXG5cclxuJHtjdHguc2Vzc2lvbi5oYXNodGVnc31cclxuXHJcbsKpIEAke2N0eC5ib3RJbmZvLnVzZXJuYW1lfVxyXG4gICAgICAgIGApXHJcbiAgICB9XHJcbiAgICBjdHguc2Vzc2lvbi5tc2cgPSBtc2c7XHJcblxyXG4gICAgY29uc3QgdU1zZyA9IGF3YWl0IGN0eC5yZXBseVdpdGhQaG90byh7IHNvdXJjZTogXCIuL3VwbG9hZHMvaW1hZ2UuanBnXCIgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhcHRpb246IG1zZyxcclxuICAgICAgICAgICAgcGFyc2VfbW9kZTogXCJIVE1MXCIsXHJcbiAgICAgICAgICAgIHJlcGx5X21hcmt1cDoge1xyXG4gICAgICAgICAgICAgICAgaW5saW5lX2tleWJvYXJkOiBidXR0b25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY3R4LnNlc3Npb24udXNlck1zZ0lkID0gdU1zZy5tZXNzYWdlX2lkO1xyXG4gICAgY3R4LnNlc3Npb24uaW1nID0gXCIuL3VwbG9hZHMvaW1hZ2UuanBnXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlbmQgdmFjYW5jeSBzY2VuZSA6IFwiLCBjdHguc2Vzc2lvbilcclxuXHJcbn0pXHJcblxyXG5zZW5kVG9BZG1pblNjZW5lLmFjdGlvbigv4pyFLywgYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgYXdhaXQgY3R4LmVkaXRNZXNzYWdlUmVwbHlNYXJrdXAoeyBpbmxpbmVfa2V5Ym9hcmQ6IFtdIH0pXHJcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XHJcblxyXG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIuKchSBIYVwiLCBcIuKchVwiKSwgTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIuKdjCBZbydxXCIsIFwi4p2MXCIpXSk7XHJcblxyXG4gICAgbGV0IHZhYztcclxuICAgIGlmIChjdHguc2Vzc2lvbi52YWNhbmN5VHlwZSA9PSAnZmluZFdvcmsnKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogY3R4LmZyb20uaWQsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogY3R4LnNlc3Npb24uZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBuYW1lOiBjdHguc2Vzc2lvbi5uYW1lLFxyXG4gICAgICAgICAgICBhZ2U6IGN0eC5zZXNzaW9uLmFnZSxcclxuICAgICAgICAgICAgdGVjaG5vbG9neTogY3R4LnNlc3Npb24udGVjaG5vbG9neSxcclxuICAgICAgICAgICAgdGdVc2VybmFtZTogY3R4LmZyb20udXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBob25lOiBjdHguc2Vzc2lvbi5jb25uZWN0LFxyXG4gICAgICAgICAgICBwbGFjZTogY3R4LnNlc3Npb24ucGxhY2UsXHJcbiAgICAgICAgICAgIC8vIG1pblN1bTogY3R4LnNlc3Npb24ubWluU3VtLFxyXG4gICAgICAgICAgICAvLyBtYXhTdW06IGN0eC5zZXNzaW9uLm1heFN1bSxcclxuICAgICAgICAgICAgcHJpY2U6IGN0eC5zZXNzaW9uLnByaWNlLFxyXG4gICAgICAgICAgICBwcm9mZXNzaW9uOiBjdHguc2Vzc2lvbi5wcm9mZXNzaW9uLFxyXG4gICAgICAgICAgICB0aW1lVG9DYWxsOiBjdHguc2Vzc2lvbi50aW1lVG9DYWxsLFxyXG4gICAgICAgICAgICBnb2FsOiBjdHguc2Vzc2lvbi5nb2FsLFxyXG4gICAgICAgICAgICB1c2VyTXNnSWQ6IGN0eC5zZXNzaW9uLnVzZXJNc2dJZCxcclxuICAgICAgICAgICAgaW1nOiBjdHguc2Vzc2lvbi5pbWcsXHJcbiAgICAgICAgICAgIGhhc2h0ZWdzOiBjdHguc2Vzc2lvbi5oYXNodGVnc1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWMgPSBhd2FpdCBWYWNhbmN5TW9kZWwuY3JlYXRlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0eC5zZXNzaW9uLnZhY2FuY3lUeXBlID09ICdmaW5kSHInKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogY3R4LmZyb20uaWQsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogY3R4LnNlc3Npb24uZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBvZmZpY2VOYW1lOiBjdHguc2Vzc2lvbi5vZmZpY2VOYW1lLFxyXG4gICAgICAgICAgICB0ZWNobm9sb2d5OiBjdHguc2Vzc2lvbi50ZWNobm9sb2d5XzIsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpYmxlOiBjdHguc2Vzc2lvbi5yZXNwb25zaWJsZSxcclxuICAgICAgICAgICAgcGxhY2U6IGN0eC5zZXNzaW9uLnBsYWNlXzIsXHJcbiAgICAgICAgICAgIHByaWNlOiBjdHguc2Vzc2lvbi5wcmljZV8yLFxyXG4gICAgICAgICAgICB0Z1VzZXJuYW1lOiBjdHguZnJvbS51c2VybmFtZSA/IGN0eC5mcm9tLnVzZXJuYW1lIDogbnVsbCxcclxuICAgICAgICAgICAgdGltZU9mV29yazogY3R4LnNlc3Npb24udGltZU9mV29yayxcclxuICAgICAgICAgICAgdGltZVRvQ2FsbDogY3R4LnNlc3Npb24udGltZVRvQ2FsbF8yLFxyXG4gICAgICAgICAgICAvLyBtaW5QcmljZTogY3R4LnNlc3Npb24ubWluUHJpY2UsXHJcbiAgICAgICAgICAgIC8vIG1heFByaWNlOiBjdHguc2Vzc2lvbi5tYXhQcmljZSxcclxuICAgICAgICAgICAgdXNlck1zZ0lkOiBjdHguc2Vzc2lvbi51c2VyTXNnSWQsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uOiBjdHguc2Vzc2lvbi5hZGRpdGlvbiA/IGN0eC5zZXNzaW9uLmFkZGl0aW9uIDogbnVsbCxcclxuICAgICAgICAgICAgaW1nOiBjdHguc2Vzc2lvbi5pbWcsXHJcbiAgICAgICAgICAgIGhhc2h0ZWdzOiBjdHguc2Vzc2lvbi5oYXNodGVncyxcclxuICAgICAgICAgICAgbGluazogY3R4LnNlc3Npb24ubGlua1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWMgPSBhd2FpdCBGaW5kSHJWYWNhbnN5TW9kZWwuY3JlYXRlKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFjSW5BZG1pbiA9IGF3YWl0IGJvdF9hZG1pbi50ZWxlZ3JhbS5zZW5kUGhvdG8oXHJcbiAgICAgICAgLy8gNjUxOTg1MjQ0LFxyXG4gICAgICAgIDE2NjE4MzIzOTcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2U6IGN0eC5zZXNzaW9uLmltZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXB0aW9uOiBg4pyFIE1hbHVtb3RsYXJuaSB0YXNkaXFsYW5nXFxuJHtjdHguc2Vzc2lvbi5tc2d9YCxcclxuICAgICAgICAgICAgcGFyc2VfbW9kZTogXCJIVE1MXCIsXHJcbiAgICAgICAgICAgIHJlcGx5X21hcmt1cDoge1xyXG4gICAgICAgICAgICAgICAgaW5saW5lX2tleWJvYXJkOiBidXR0b25zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGN0eC5zZXNzaW9uLnZhY2FuY3lUeXBlID09ICdmaW5kV29yaydcclxuICAgICAgICA/IGF3YWl0IFZhY2FuY3lNb2RlbC51cGRhdGVPbmUoeyBfaWQ6IHZhYy5faWQgfSwgeyBtZXNzYWdlSWQ6IHZhY0luQWRtaW4ubWVzc2FnZV9pZCB9KVxyXG4gICAgICAgIDogYXdhaXQgRmluZEhyVmFjYW5zeU1vZGVsLnVwZGF0ZU9uZSh7IF9pZDogdmFjLl9pZCB9LCB7IG1lc3NhZ2VJZDogdmFjSW5BZG1pbi5tZXNzYWdlX2lkIH0pO1xyXG5cclxuXHJcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChNZXNzYWdlcy5TZW5kVG9BZG1pbltsYW5nXSk7XHJcbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5NQUlOKVxyXG59KVxyXG5cclxuc2VuZFRvQWRtaW5TY2VuZS5hY3Rpb24oL+KdjC8sIGFzeW5jIChjdHgpID0+IHtcclxuICAgIGF3YWl0IGN0eC5lZGl0TWVzc2FnZVJlcGx5TWFya3VwKHsgaW5saW5lX2tleWJvYXJkOiBbXSB9KVxyXG5cclxuICAgIGNvbnN0IGxhbmcgPSBjdHguc2Vzc2lvbi5sYW5ndWFnZTtcclxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKE1lc3NhZ2VzLkNhbmNlbGVkW2xhbmddKVxyXG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuTUFJTilcclxufSlcclxuIl19