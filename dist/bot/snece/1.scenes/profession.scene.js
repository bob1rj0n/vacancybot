"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.professionScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.professionScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.PROFESSION);
exports.professionScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.EnterProfession[lang]);
});
exports.professionScene.on('text', async (ctx) => {
    ctx.session.profession = ctx.message.text;
    await ctx.scene.enter(SceneName_1.SceneNames.TIME_TO_CALL);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc2lvbi5zY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ib3Qvc25lY2UvMS5zY2VuZXMvcHJvZmVzc2lvbi5zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBa0M7QUFDbEMsZ0VBQTZEO0FBQzdELGtFQUFnRTtBQUluRCxRQUFBLGVBQWUsR0FBRyxJQUFJLGlCQUFNLENBQUMsU0FBUyxDQUFZLHNCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEYsdUJBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQzNELENBQUMsQ0FBQyxDQUFBO0FBRUYsdUJBQWUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMxQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDbEQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XG5pbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL3ZhY2FuY3kubW9kZWxcIjtcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi8uLi9wbHVnaW5zL2JvdC5wbHVnaW5cIjtcblxuZXhwb3J0IGNvbnN0IHByb2Zlc3Npb25TY2VuZSA9IG5ldyBTY2VuZXMuQmFzZVNjZW5lPE15Q29udGV4dD4oU2NlbmVOYW1lcy5QUk9GRVNTSU9OKTtcblxucHJvZmVzc2lvblNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XG4gICAgYXdhaXQgY3R4LnJlcGx5V2l0aEhUTUwoTWVzc2FnZXMuRW50ZXJQcm9mZXNzaW9uW2xhbmddKVxufSlcblxucHJvZmVzc2lvblNjZW5lLm9uKCd0ZXh0JywgYXN5bmMgKGN0eCkgPT4ge1xuICAgIGN0eC5zZXNzaW9uLnByb2Zlc3Npb24gPSBjdHgubWVzc2FnZS50ZXh0O1xuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlRJTUVfVE9fQ0FMTClcbn0pXG4iXX0=