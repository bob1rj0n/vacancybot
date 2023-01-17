"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
const findHrVacansy_model_1 = require("../../../common/db/model/findHrVacansy.model");
const user_model_1 = require("../../../common/db/model/user.model");
const vacancy_model_1 = require("../../../common/db/model/vacancy.model");
const bot_plugin_1 = require("../../plugins/bot.plugin");
exports.adminScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.ADMIN);
exports.adminScene.enter(async (ctx) => {
});
exports.adminScene.action('✅', async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
    let Msg, msg;
    const a = (await vacancy_model_1.VacancyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    const b = (await findHrVacansy_model_1.FindHrVacansyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    Msg = a ? a : b;
    const user = (await user_model_1.UserModel.find({ userId: Msg.userId })).shift();
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
        `);
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
        `);
    }
    if (Msg.type == 'findHr' && Msg.link === null) {
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
        `);
    }
    const vacCahn = await ctx.telegram.sendPhoto("@bekobod_job", {
        source: Msg.img
    }, {
        caption: msg,
        parse_mode: "HTML"
    });
    await bot_plugin_1.bot.telegram.sendMessage(Msg.userId, messages_1.Messages.PostedByAdmin[user.language], {
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
    });
    await ctx.replyWithHTML(`Vakansiya kanalga joylandi!`);
});
exports.adminScene.action('❌', async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
    const Msg = (await vacancy_model_1.VacancyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    ctx.session.rejectedMsg = Msg;
    await ctx.scene.enter(SceneName_1.SceneNames.REJECT_VACANSY);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzIuc2NlbmVzL2FkbWluLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUEwQztBQUMxQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBQ2hFLHNGQUFrRjtBQUNsRixvRUFBZ0U7QUFDaEUsMEVBQXNFO0FBQ3RFLHlEQUEwRDtBQUc3QyxRQUFBLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUMsU0FBUyxDQUFZLHNCQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7QUFFM0Usa0JBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQy9CLENBQUMsQ0FBQyxDQUFBO0FBQ0Ysa0JBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRTtJQUMvQixNQUFNLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRXpELElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSw0QkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLHdDQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLHNCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEUsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTtRQUN4QixHQUFHLEdBQUcsQ0FBQzs7O2VBR0EsR0FBRyxDQUFDLElBQUk7V0FDWixHQUFHLENBQUMsR0FBRztzQkFDSSxHQUFHLENBQUMsU0FBUztrQkFDakIsR0FBRyxDQUFDLFVBQVU7a0JBQ2QsR0FBRyxDQUFDLFVBQVU7WUFDcEIsR0FBRyxDQUFDLEtBQUs7WUFDVCxHQUFHLENBQUMsS0FBSztZQUNULEdBQUcsQ0FBQyxLQUFLO1lBQ1QsR0FBRyxDQUFDLFVBQVU7NEJBQ0UsR0FBRyxDQUFDLFVBQVU7YUFDN0IsR0FBRyxDQUFDLElBQUk7O0VBRW5CLEdBQUcsQ0FBQyxRQUFROztLQUVULEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUTtTQUNoQixDQUFDLENBQUE7S0FDTDtJQUNELElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDM0MsR0FBRyxHQUFHLENBQUM7OztZQUdILEdBQUcsQ0FBQyxVQUFVO3NCQUNKLEdBQUcsQ0FBQyxTQUFTO2tCQUNqQixHQUFHLENBQUMsVUFBVTtrQkFDZCxHQUFHLENBQUMsVUFBVTtZQUNwQixHQUFHLENBQUMsS0FBSzthQUNSLEdBQUcsQ0FBQyxXQUFXO3FCQUNQLEdBQUcsQ0FBQyxVQUFVO2VBQ3BCLEdBQUcsQ0FBQyxVQUFVO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLOytCQUNVLEdBQUcsQ0FBQyxJQUFJOztFQUVyQyxHQUFHLENBQUMsUUFBUTs7O1NBR0wsQ0FBQyxDQUFBO0tBQ0w7SUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDO1FBQzFDLEdBQUcsR0FBRyxDQUFDOzs7WUFHSCxHQUFHLENBQUMsVUFBVTtzQkFDSixHQUFHLENBQUMsU0FBUztrQkFDakIsR0FBRyxDQUFDLFVBQVU7a0JBQ2QsR0FBRyxDQUFDLFVBQVU7WUFDcEIsR0FBRyxDQUFDLEtBQUs7YUFDUixHQUFHLENBQUMsV0FBVztxQkFDUCxHQUFHLENBQUMsVUFBVTtlQUNwQixHQUFHLENBQUMsVUFBVTtZQUNqQixHQUFHLENBQUMsS0FBSzs7RUFFbkIsR0FBRyxDQUFDLFFBQVE7O0tBRVQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ2hCLENBQUMsQ0FBQTtLQUNMO0lBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDeEMsY0FBYyxFQUNkO1FBQ0ksTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHO0tBQ2xCLEVBQ0Q7UUFDSSxPQUFPLEVBQUUsR0FBRztRQUNaLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQ0osQ0FBQztJQUVGLE1BQU0sZ0JBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUMxQixHQUFHLENBQUMsTUFBTSxFQUNWLG1CQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDckM7UUFDSSxVQUFVLEVBQUUsTUFBTTtRQUNsQixtQkFBbUIsRUFBRSxHQUFHLENBQUMsU0FBUztRQUNsQyxZQUFZLEVBQUU7WUFDVixlQUFlLEVBQUU7Z0JBQ2I7b0JBQ0k7d0JBQ0ksSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsNEJBQTRCLE9BQU8sQ0FBQyxVQUFVLEVBQUU7cUJBQ3RFO2lCQUNKO2FBQ0o7U0FDSjtLQUNKLENBQ0osQ0FBQTtJQUNELE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELENBQUMsQ0FBQyxDQUFBO0FBR0Ysa0JBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUMsRUFBRTtJQUMvQixNQUFNLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRXpELE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSw0QkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbkcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzlCLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmt1cCwgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBTY2VuZU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9TY2VuZU5hbWVcIjtcclxuaW1wb3J0IHsgRmluZEhyVmFjYW5zeU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbC9maW5kSHJWYWNhbnN5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGIvbW9kZWwvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL3ZhY2FuY3kubW9kZWxcIjtcclxuaW1wb3J0IHsgYm90LCBNeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9ib3QucGx1Z2luXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkbWluU2NlbmUgPSBuZXcgU2NlbmVzLkJhc2VTY2VuZTxNeUNvbnRleHQ+KFNjZW5lTmFtZXMuQURNSU4pXHJcblxyXG5hZG1pblNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcclxufSlcclxuYWRtaW5TY2VuZS5hY3Rpb24oJ+KchScsIGFzeW5jIGN0eCA9PiB7XHJcbiAgICBhd2FpdCBjdHguZWRpdE1lc3NhZ2VSZXBseU1hcmt1cCh7IGlubGluZV9rZXlib2FyZDogW10gfSlcclxuXHJcbiAgICBsZXQgTXNnLCBtc2c7XHJcbiAgICBjb25zdCBhID0gKGF3YWl0IFZhY2FuY3lNb2RlbC5maW5kKHsgbWVzc2FnZUlkOiBjdHguY2FsbGJhY2tRdWVyeS5tZXNzYWdlLm1lc3NhZ2VfaWQgfSkpLnNoaWZ0KCk7XHJcbiAgICBjb25zdCBiID0gKGF3YWl0IEZpbmRIclZhY2Fuc3lNb2RlbC5maW5kKHsgbWVzc2FnZUlkOiBjdHguY2FsbGJhY2tRdWVyeS5tZXNzYWdlLm1lc3NhZ2VfaWQgfSkpLnNoaWZ0KCk7XHJcbiAgICBNc2cgPSBhID8gYSA6IGI7XHJcbiAgICBjb25zdCB1c2VyID0gKGF3YWl0IFVzZXJNb2RlbC5maW5kKHsgdXNlcklkOiBNc2cudXNlcklkIH0pKS5zaGlmdCgpO1xyXG4gICAgaWYgKE1zZy50eXBlID09ICdmaW5kV29yaycpIHtcclxuICAgICAgICBtc2cgPSAoYFxyXG5Jc2ggam95aSBrZXJhazpcclxuXHJcbvCfkajigI3wn5K8IFhvZGltOiAke01zZy5uYW1lfVxyXG7wn5WRIFlvc2g6ICR7TXNnLmFnZX1cclxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke01zZy5kaXJlY3Rpb259PC9iPlxyXG7wn5OaIFRleG5vbG9naXlhOiAke01zZy50ZWNobm9sb2d5fVxyXG7wn4e68J+HvyBUZWxlZ3JhbTogQCR7TXNnLnRnVXNlcm5hbWV9IFxyXG7wn5OxIEFsb3FhOiAke01zZy5waG9uZX1cclxu8J+TjSBIdWR1ZDogJHtNc2cucGxhY2V9XHJcbvCfkrggTWFvc2g6ICR7TXNnLnByaWNlfVxyXG7wn5GkIEthc2JpOiAke01zZy5wcm9mZXNzaW9ufVxyXG7wn5WwIE11cm9qYWF0IHFpbGlzaCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cclxu8J+UjiBNYXFzYWQ6ICR7TXNnLmdvYWx9XHJcblxyXG4ke01zZy5oYXNodGVnc31cclxuXHJcbsKpIEAke2N0eC5ib3RJbmZvLnVzZXJuYW1lfVxyXG4gICAgICAgIGApXHJcbiAgICB9XHJcbiAgICBpZiAoTXNnLnR5cGUgPT0gJ2ZpbmRIcicgJiYgTXNnLmxpbmsgIT09IG51bGwpIHtcclxuICAgICAgICBtc2cgPSAoYFxyXG5Yb2RpbSBrZXJhazpcclxuXHJcbvCfj6IgSWRvcmE6ICR7TXNnLm9mZmljZU5hbWV9XHJcbvCfkajigI3wn5K7IDxiPllvJ25hbGlzaDogJHtNc2cuZGlyZWN0aW9ufTwvYj5cclxu8J+TmiBUZXhub2xvZ2l5YTogJHtNc2cudGVjaG5vbG9neX1cclxu8J+HuvCfh78gVGVsZWdyYW06IEAke01zZy50Z1VzZXJuYW1lfSBcclxu8J+TjSBIdWR1ZDogJHtNc2cucGxhY2V9XHJcbvCfkaQgTWFzJ3VsOiAke01zZy5yZXNwb25zaWJsZX1cclxu8J+VsCBNdXJvamFhdCB2YXF0aTogJHtNc2cudGltZVRvQ2FsbH1cclxu4o+wIElzaCB2YXF0aTogJHtNc2cudGltZU9mV29ya31cclxu8J+SuCBNYW9zaDogJHtNc2cucHJpY2V9XHJcbvCfk6UgQXJpemEgcW9sZGlyaXNoOiA8YSBocmVmPVwiJHtNc2cubGlua31cIj5MaW5rPC9hPlxyXG5cclxuJHtNc2cuaGFzaHRlZ3N9XHJcblxyXG7CqSBAYmVrb2JvZF9qb2JzX2JvdFxyXG4gICAgICAgIGApXHJcbiAgICB9XHJcbiAgICBpZiAoTXNnLnR5cGUgPT0gJ2ZpbmRIcicgJiYgTXNnLmxpbmsgPT09IG51bGwpe1xyXG4gICAgICAgIG1zZyA9IChgXHJcblhvZGltIGtlcmFrOlxyXG5cclxu8J+PoiBJZG9yYTogJHtNc2cub2ZmaWNlTmFtZX1cclxu8J+RqOKAjfCfkrsgPGI+WW8nbmFsaXNoOiAke01zZy5kaXJlY3Rpb259PC9iPlxyXG7wn5OaIFRleG5vbG9naXlhOiAke01zZy50ZWNobm9sb2d5fVxyXG7wn4e68J+HvyBUZWxlZ3JhbTogQCR7TXNnLnRnVXNlcm5hbWV9IFxyXG7wn5ONIEh1ZHVkOiAke01zZy5wbGFjZX1cclxu8J+RpCBNYXMndWw6ICR7TXNnLnJlc3BvbnNpYmxlfVxyXG7wn5WwIE11cm9qYWF0IHZhcXRpOiAke01zZy50aW1lVG9DYWxsfVxyXG7ij7AgSXNoIHZhcXRpOiAke01zZy50aW1lT2ZXb3JrfVxyXG7wn5K4IE1hb3NoOiAke01zZy5wcmljZX1cclxuXHJcbiR7TXNnLmhhc2h0ZWdzfVxyXG5cclxuwqkgQCR7Y3R4LmJvdEluZm8udXNlcm5hbWV9XHJcbiAgICAgICAgYClcclxuICAgIH1cclxuICAgIGNvbnN0IHZhY0NhaG4gPSBhd2FpdCBjdHgudGVsZWdyYW0uc2VuZFBob3RvKFxyXG4gICAgICAgIFwiQGJla29ib2Rfam9iXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzb3VyY2U6IE1zZy5pbWdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FwdGlvbjogbXNnLFxyXG4gICAgICAgICAgICBwYXJzZV9tb2RlOiBcIkhUTUxcIlxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgYm90LnRlbGVncmFtLnNlbmRNZXNzYWdlKFxyXG4gICAgICAgIE1zZy51c2VySWQsXHJcbiAgICAgICAgTWVzc2FnZXMuUG9zdGVkQnlBZG1pblt1c2VyLmxhbmd1YWdlXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcnNlX21vZGU6IFwiSFRNTFwiLFxyXG4gICAgICAgICAgICByZXBseV90b19tZXNzYWdlX2lkOiBNc2cudXNlck1zZ0lkLFxyXG4gICAgICAgICAgICByZXBseV9tYXJrdXA6IHtcclxuICAgICAgICAgICAgICAgIGlubGluZV9rZXlib2FyZDogW1xyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJMaW5rXCIsIHVybDogYGh0dHBzOi8vdC5tZS9iZWtvYm9kX2pvYi8ke3ZhY0NhaG4ubWVzc2FnZV9pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChgVmFrYW5zaXlhIGthbmFsZ2Egam95bGFuZGkhYClcclxufSlcclxuXHJcblxyXG5hZG1pblNjZW5lLmFjdGlvbign4p2MJywgYXN5bmMgY3R4ID0+IHtcclxuICAgIGF3YWl0IGN0eC5lZGl0TWVzc2FnZVJlcGx5TWFya3VwKHsgaW5saW5lX2tleWJvYXJkOiBbXSB9KVxyXG5cclxuICAgIGNvbnN0IE1zZyA9IChhd2FpdCBWYWNhbmN5TW9kZWwuZmluZCh7IG1lc3NhZ2VJZDogY3R4LmNhbGxiYWNrUXVlcnkubWVzc2FnZS5tZXNzYWdlX2lkIH0pKS5zaGlmdCgpO1xyXG5cclxuICAgIGN0eC5zZXNzaW9uLnJlamVjdGVkTXNnID0gTXNnO1xyXG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuUkVKRUNUX1ZBQ0FOU1kpO1xyXG59KVxyXG4iXX0=