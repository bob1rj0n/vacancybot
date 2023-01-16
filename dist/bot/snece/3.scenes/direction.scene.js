"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direction2Scene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.direction2Scene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.DIRECTION_2);
exports.direction2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.Direction[lang]);
});
exports.direction2Scene.on('text', async (ctx) => {
    ctx.session.direction = ctx.message.text;
    await ctx.scene.enter(SceneName_1.SceneNames.TECHNOLOGY_2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNjZW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2JvdC9zbmVjZS8zLnNjZW5lcy9kaXJlY3Rpb24uc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWtDO0FBQ2xDLGdFQUE2RDtBQUM3RCxrRUFBZ0U7QUFHbkQsUUFBQSxlQUFlLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXZGLHVCQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNoQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLHVCQUFlLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDckMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBTY2VuZU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9TY2VuZU5hbWVcIjtcclxuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbjJTY2VuZSA9IG5ldyBTY2VuZXMuQmFzZVNjZW5lPE15Q29udGV4dD4oU2NlbmVOYW1lcy5ESVJFQ1RJT05fMik7XHJcblxyXG5kaXJlY3Rpb24yU2NlbmUuZW50ZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgbGFuZyA9IGN0eC5zZXNzaW9uLmxhbmd1YWdlO1xyXG4gICAgYXdhaXQgY3R4LnJlcGx5V2l0aEhUTUwoTWVzc2FnZXMuRGlyZWN0aW9uW2xhbmddKVxyXG59KVxyXG5cclxuZGlyZWN0aW9uMlNjZW5lLm9uKCd0ZXh0JywgYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY3R4LnNlc3Npb24uZGlyZWN0aW9uID0gY3R4Lm1lc3NhZ2UudGV4dDtcclxuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlRFQ0hOT0xPR1lfMik7XHJcbn0pO1xyXG4iXX0=