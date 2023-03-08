"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectVacansyScene = void 0;
const telegraf_1 = require("telegraf");
const SceneName_1 = require("../../../common/constant/SceneName");
const user_model_1 = require("../../../common/db/model/user.model");
const bot_plugin_1 = require("../../plugins/bot.plugin");
exports.rejectVacansyScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.REJECT_VACANSY);
exports.rejectVacansyScene.enter(async (ctx) => {
    const Msg = ctx.session.rejectedMsg;
    const user = (await user_model_1.UserModel.find({ userId: Msg.userId })).shift();
    console.log("reject scene session : ", ctx.session);
    await ctx.reply(`Vakansiya bekor qilindi sababini kiriting!\nFoydalanuvchi tili : ${user.language}`, {
        reply_to_message_id: Msg.message_id
    });
});
exports.rejectVacansyScene.on('text', async (ctx) => {
    const sabab = ctx.message.text;
    const Msg = ctx.session.rejectedMsg;
    const user = (await user_model_1.UserModel.find({ userId: Msg.userId })).shift();
    await bot_plugin_1.bot.telegram.sendMessage(Msg.userId, (user.language == 'uz'
        ? `Vakansiyangiz bekor qilindi!\nSababi : ${sabab}`
        : user.language == 'ru'
            ? `Ваша вакансия была отменена!\nПричина: ${sabab}`
            : ` Your vacancy has been cancelled!\nReason : ${sabab}`), {
        reply_to_message_id: Msg.userMsgId
    });
    await ctx.reply("Xabar foydalanuvchiga yuborildi!");
    await ctx.scene.enter(SceneName_1.SceneNames.ADMIN);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVqZWN0LnNjZW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2JvdC9zbmVjZS8yLnNjZW5lcy9yZWplY3Quc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWtDO0FBQ2xDLGtFQUFnRTtBQUNoRSxvRUFBZ0U7QUFFaEUseURBQTBEO0FBRTdDLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTdGLDBCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbkMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDcEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLHNCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFcEQsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUNYLG9FQUFvRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ25GO1FBQ0ksbUJBQW1CLEVBQUUsR0FBRyxDQUFDLFVBQVU7S0FDdEMsQ0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUE7QUFFRiwwQkFBa0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4QyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMvQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNwQyxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sc0JBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwRSxNQUFNLGdCQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDMUIsR0FBRyxDQUFDLE1BQU0sRUFDVixDQUNJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSTtRQUNqQixDQUFDLENBQUMsMENBQTBDLEtBQUssRUFBRTtRQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQ25CLENBQUMsQ0FBQywwQ0FBMEMsS0FBSyxFQUFFO1lBQ25ELENBQUMsQ0FBQywrQ0FBK0MsS0FBSyxFQUFFLENBQ25FLEVBQ0Q7UUFDSSxtQkFBbUIsRUFBRSxHQUFHLENBQUMsU0FBUztLQUNyQyxDQUNKLENBQUE7SUFDRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtJQUNuRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDM0MsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbC91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL3ZhY2FuY3kubW9kZWxcIjtcbmltcG9ydCB7IGJvdCwgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xuXG5leHBvcnQgY29uc3QgcmVqZWN0VmFjYW5zeVNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLlJFSkVDVF9WQUNBTlNZKTtcblxucmVqZWN0VmFjYW5zeVNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCBNc2cgPSBjdHguc2Vzc2lvbi5yZWplY3RlZE1zZztcbiAgICBjb25zdCB1c2VyID0gKGF3YWl0IFVzZXJNb2RlbC5maW5kKHsgdXNlcklkOiBNc2cudXNlcklkIH0pKS5zaGlmdCgpO1xuXG4gICAgY29uc29sZS5sb2coXCJyZWplY3Qgc2NlbmUgc2Vzc2lvbiA6IFwiLCBjdHguc2Vzc2lvbik7XG5cbiAgICBhd2FpdCBjdHgucmVwbHkoXG4gICAgICAgIGBWYWthbnNpeWEgYmVrb3IgcWlsaW5kaSBzYWJhYmluaSBraXJpdGluZyFcXG5Gb3lkYWxhbnV2Y2hpIHRpbGkgOiAke3VzZXIubGFuZ3VhZ2V9YCxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVwbHlfdG9fbWVzc2FnZV9pZDogTXNnLm1lc3NhZ2VfaWRcbiAgICAgICAgfVxuICAgICk7XG59KVxuXG5yZWplY3RWYWNhbnN5U2NlbmUub24oJ3RleHQnLCBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3Qgc2FiYWIgPSBjdHgubWVzc2FnZS50ZXh0O1xuICAgIGNvbnN0IE1zZyA9IGN0eC5zZXNzaW9uLnJlamVjdGVkTXNnO1xuICAgIGNvbnN0IHVzZXIgPSAoYXdhaXQgVXNlck1vZGVsLmZpbmQoeyB1c2VySWQ6IE1zZy51c2VySWQgfSkpLnNoaWZ0KCk7XG4gICAgYXdhaXQgYm90LnRlbGVncmFtLnNlbmRNZXNzYWdlKFxuICAgICAgICBNc2cudXNlcklkLFxuICAgICAgICAoXG4gICAgICAgICAgICB1c2VyLmxhbmd1YWdlID09ICd1eidcbiAgICAgICAgICAgICAgICA/IGBWYWthbnNpeWFuZ2l6IGJla29yIHFpbGluZGkhXFxuU2FiYWJpIDogJHtzYWJhYn1gXG4gICAgICAgICAgICAgICAgOiB1c2VyLmxhbmd1YWdlID09ICdydSdcbiAgICAgICAgICAgICAgICAgICAgPyBg0JLQsNGI0LAg0LLQsNC60LDQvdGB0LjRjyDQsdGL0LvQsCDQvtGC0LzQtdC90LXQvdCwIVxcbtCf0YDQuNGH0LjQvdCwOiAke3NhYmFifWBcbiAgICAgICAgICAgICAgICAgICAgOiBgIFlvdXIgdmFjYW5jeSBoYXMgYmVlbiBjYW5jZWxsZWQhXFxuUmVhc29uIDogJHtzYWJhYn1gXG4gICAgICAgICksXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcGx5X3RvX21lc3NhZ2VfaWQ6IE1zZy51c2VyTXNnSWRcbiAgICAgICAgfVxuICAgIClcbiAgICBhd2FpdCBjdHgucmVwbHkoXCJYYWJhciBmb3lkYWxhbnV2Y2hpZ2EgeXVib3JpbGRpIVwiKVxuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLkFETUlOKVxufSlcbiJdfQ==