"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.connectScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.CONNECT);
exports.connectScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.ConnectPhone[lang]);
});
exports.connectScene.on('text', async (ctx) => {
    const lang = ctx.session.language;
    let phone = Number(ctx.message.text);
    if (!phone || phone > 999000000000 || phone < 998000000000) {
        await ctx.replyWithHTML(messages_1.Messages.ErrorToNumber[lang]);
    }
    else {
        ctx.session.phone = ctx.message.text;
        await ctx.scene.enter(SceneName_1.SceneNames.PLACE);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5zY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ib3Qvc25lY2UvMS5zY2VuZXMvY29ubmVjdC5zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBa0M7QUFDbEMsZ0VBQTZEO0FBQzdELGtFQUFnRTtBQUluRCxRQUFBLFlBQVksR0FBRyxJQUFJLGlCQUFNLENBQUMsU0FBUyxDQUFZLHNCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFaEYsb0JBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ3hELENBQUMsQ0FBQyxDQUFBO0FBRUYsb0JBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNsQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssR0FBRyxZQUFZLElBQUksS0FBSyxHQUFHLFlBQVksRUFBRTtRQUN4RCxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtLQUN4RDtTQUFNO1FBQ0gsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDckMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNDO0FBQ0wsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xyXG5pbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL3ZhY2FuY3kubW9kZWxcIjtcclxuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RTY2VuZSA9IG5ldyBTY2VuZXMuQmFzZVNjZW5lPE15Q29udGV4dD4oU2NlbmVOYW1lcy5DT05ORUNUKTtcclxuXHJcbmNvbm5lY3RTY2VuZS5lbnRlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XHJcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChNZXNzYWdlcy5Db25uZWN0UGhvbmVbbGFuZ10pXHJcbn0pXHJcblxyXG5jb25uZWN0U2NlbmUub24oJ3RleHQnLCBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XHJcbiAgICBsZXQgcGhvbmUgPSBOdW1iZXIoY3R4Lm1lc3NhZ2UudGV4dCk7XHJcbiAgICBpZiAoIXBob25lIHx8IHBob25lID4gOTk5MDAwMDAwMDAwIHx8IHBob25lIDwgOTk4MDAwMDAwMDAwKSB7XHJcbiAgICAgICAgYXdhaXQgY3R4LnJlcGx5V2l0aEhUTUwoTWVzc2FnZXMuRXJyb3JUb051bWJlcltsYW5nXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3R4LnNlc3Npb24ucGhvbmUgPSBjdHgubWVzc2FnZS50ZXh0O1xyXG4gICAgICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlBMQUNFKTtcclxuICAgIH1cclxufSlcclxuIl19