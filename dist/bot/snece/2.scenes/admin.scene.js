"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
const findHrVacansy_model_1 = require("../../../common/db/model/findHrVacansy.model");
const user_model_1 = require("../../../common/db/model/user.model");
const vacancy_model_1 = require("../../../common/db/model/vacancy.model");
const functions_1 = require("../../../common/service/functions");
const bot_plugin_1 = require("../../plugins/bot.plugin");
exports.adminScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.ADMIN);
exports.adminScene.enter(async (ctx) => {
    ctx.reply(`${ctx.from.first_name} admin bo'limiga xush kelibsiz!`);
});
exports.adminScene.action('✅', async (ctx) => {
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });
    let Msg, msg;
    const a = (await vacancy_model_1.VacancyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    const b = (await findHrVacansy_model_1.FindHrVacansyModel.find({ messageId: ctx.callbackQuery.message.message_id })).shift();
    Msg = a ? a : b;
    const user = (await user_model_1.UserModel.find({ userId: Msg.userId })).shift();
    msg = await (0, functions_1.getVacansyForChannel)(Msg);
    const vacCahn = await ctx.telegram.sendPhoto("@bekobod_job", 
    // "@IT_vacansy",
    {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzIuc2NlbmVzL2FkbWluLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUEwQztBQUMxQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBQ2hFLHNGQUFrRjtBQUNsRixvRUFBZ0U7QUFDaEUsMEVBQXNFO0FBQ3RFLGlFQUFxRjtBQUNyRix5REFBMEQ7QUFHN0MsUUFBQSxVQUFVLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBRTNFLGtCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMzQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLGlDQUFpQyxDQUFDLENBQUE7QUFDdEUsQ0FBQyxDQUFDLENBQUE7QUFDRixrQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQy9CLE1BQU0sR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFekQsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLDRCQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sd0NBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2RyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sc0JBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwRSxHQUFHLEdBQUcsTUFBTSxJQUFBLGdDQUFvQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3hDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakI7UUFDSSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUc7S0FDbEIsRUFDRDtRQUNJLE9BQU8sRUFBRSxHQUFHO1FBQ1osVUFBVSxFQUFFLE1BQU07S0FDckIsQ0FDSixDQUFDO0lBRUYsTUFBTSxnQkFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQzFCLEdBQUcsQ0FBQyxNQUFNLEVBQ1YsbUJBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNyQztRQUNJLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxTQUFTO1FBQ2xDLFlBQVksRUFBRTtZQUNWLGVBQWUsRUFBRTtnQkFDYjtvQkFDSTt3QkFDSSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSw0QkFBNEIsT0FBTyxDQUFDLFVBQVUsRUFBRTtxQkFDdEU7aUJBQ0o7YUFDSjtTQUNKO0tBQ0osQ0FDSixDQUFBO0lBQ0QsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUFDLENBQUE7QUFHRixrQkFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLEdBQUcsRUFBQyxFQUFFO0lBQy9CLE1BQU0sR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFekQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLDRCQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVuRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDOUIsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFya3VwLCBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XG5pbXBvcnQgeyBGaW5kSHJWYWNhbnN5TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL2ZpbmRIclZhY2Fuc3kubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGIvbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgVmFjYW5jeU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbC92YWNhbmN5Lm1vZGVsXCI7XG5pbXBvcnQgeyBnZXRWYWNhbmN5LCBnZXRWYWNhbnN5Rm9yQ2hhbm5lbCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc2VydmljZS9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGJvdCwgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xuXG5cbmV4cG9ydCBjb25zdCBhZG1pblNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLkFETUlOKVxuXG5hZG1pblNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHgucmVwbHkoYCR7Y3R4LmZyb20uZmlyc3RfbmFtZX0gYWRtaW4gYm8nbGltaWdhIHh1c2gga2VsaWJzaXohYClcbn0pXG5hZG1pblNjZW5lLmFjdGlvbign4pyFJywgYXN5bmMgY3R4ID0+IHtcbiAgICBhd2FpdCBjdHguZWRpdE1lc3NhZ2VSZXBseU1hcmt1cCh7IGlubGluZV9rZXlib2FyZDogW10gfSlcblxuICAgIGxldCBNc2csIG1zZztcbiAgICBjb25zdCBhID0gKGF3YWl0IFZhY2FuY3lNb2RlbC5maW5kKHsgbWVzc2FnZUlkOiBjdHguY2FsbGJhY2tRdWVyeS5tZXNzYWdlLm1lc3NhZ2VfaWQgfSkpLnNoaWZ0KCk7XG4gICAgY29uc3QgYiA9IChhd2FpdCBGaW5kSHJWYWNhbnN5TW9kZWwuZmluZCh7IG1lc3NhZ2VJZDogY3R4LmNhbGxiYWNrUXVlcnkubWVzc2FnZS5tZXNzYWdlX2lkIH0pKS5zaGlmdCgpO1xuICAgIE1zZyA9IGEgPyBhIDogYjtcbiAgICBjb25zdCB1c2VyID0gKGF3YWl0IFVzZXJNb2RlbC5maW5kKHsgdXNlcklkOiBNc2cudXNlcklkIH0pKS5zaGlmdCgpO1xuICAgIG1zZyA9IGF3YWl0IGdldFZhY2Fuc3lGb3JDaGFubmVsKE1zZyk7XG4gICAgY29uc3QgdmFjQ2FobiA9IGF3YWl0IGN0eC50ZWxlZ3JhbS5zZW5kUGhvdG8oXG4gICAgICAgIFwiQGJla29ib2Rfam9iXCIsXG4gICAgICAgIC8vIFwiQElUX3ZhY2Fuc3lcIixcbiAgICAgICAge1xuICAgICAgICAgICAgc291cmNlOiBNc2cuaW1nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhcHRpb246IG1zZyxcbiAgICAgICAgICAgIHBhcnNlX21vZGU6IFwiSFRNTFwiXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgYXdhaXQgYm90LnRlbGVncmFtLnNlbmRNZXNzYWdlKFxuICAgICAgICBNc2cudXNlcklkLFxuICAgICAgICBNZXNzYWdlcy5Qb3N0ZWRCeUFkbWluW3VzZXIubGFuZ3VhZ2VdLFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXJzZV9tb2RlOiBcIkhUTUxcIixcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IE1zZy51c2VyTXNnSWQsXG4gICAgICAgICAgICByZXBseV9tYXJrdXA6IHtcbiAgICAgICAgICAgICAgICBpbmxpbmVfa2V5Ym9hcmQ6IFtcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTGlua1wiLCB1cmw6IGBodHRwczovL3QubWUvYmVrb2JvZF9qb2IvJHt2YWNDYWhuLm1lc3NhZ2VfaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKVxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKGBWYWthbnNpeWEga2FuYWxnYSBqb3lsYW5kaSFgKVxufSlcblxuXG5hZG1pblNjZW5lLmFjdGlvbign4p2MJywgYXN5bmMgY3R4ID0+IHtcbiAgICBhd2FpdCBjdHguZWRpdE1lc3NhZ2VSZXBseU1hcmt1cCh7IGlubGluZV9rZXlib2FyZDogW10gfSlcblxuICAgIGNvbnN0IE1zZyA9IChhd2FpdCBWYWNhbmN5TW9kZWwuZmluZCh7IG1lc3NhZ2VJZDogY3R4LmNhbGxiYWNrUXVlcnkubWVzc2FnZS5tZXNzYWdlX2lkIH0pKS5zaGlmdCgpO1xuXG4gICAgY3R4LnNlc3Npb24ucmVqZWN0ZWRNc2cgPSBNc2c7XG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuUkVKRUNUX1ZBQ0FOU1kpO1xufSlcbiJdfQ==