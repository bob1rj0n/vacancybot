"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directionScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.directionScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.DIRECTION);
exports.directionScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.Direction[lang]);
});
exports.directionScene.on('text', async (ctx) => {
    ctx.session.direction = ctx.message.text;
    await ctx.scene.enter(SceneName_1.SceneNames.TECHNOLOGY);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNjZW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2JvdC9zbmVjZS8xLnNjZW5lcy9kaXJlY3Rpb24uc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWtDO0FBQ2xDLGdFQUE2RDtBQUM3RCxrRUFBZ0U7QUFHbkQsUUFBQSxjQUFjLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXBGLHNCQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLHNCQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xuXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uU2NlbmUgPSBuZXcgU2NlbmVzLkJhc2VTY2VuZTxNeUNvbnRleHQ+KFNjZW5lTmFtZXMuRElSRUNUSU9OKTtcblxuZGlyZWN0aW9uU2NlbmUuZW50ZXIoYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSBjdHguc2Vzc2lvbi5sYW5ndWFnZTtcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChNZXNzYWdlcy5EaXJlY3Rpb25bbGFuZ10pXG59KVxuXG5kaXJlY3Rpb25TY2VuZS5vbigndGV4dCcsIGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHguc2Vzc2lvbi5kaXJlY3Rpb24gPSBjdHgubWVzc2FnZS50ZXh0O1xuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlRFQ0hOT0xPR1kpO1xufSk7XG4iXX0=