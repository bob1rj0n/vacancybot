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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNjZW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2JvdC9zbmVjZS8xLnNjZW5lcy9kaXJlY3Rpb24uc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQWtDO0FBQ2xDLGdFQUE2RDtBQUM3RCxrRUFBZ0U7QUFHbkQsUUFBQSxjQUFjLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXBGLHNCQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMvQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLHNCQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBTY2VuZU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9TY2VuZU5hbWVcIjtcclxuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvblNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLkRJUkVDVElPTik7XHJcblxyXG5kaXJlY3Rpb25TY2VuZS5lbnRlcihhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XHJcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChNZXNzYWdlcy5EaXJlY3Rpb25bbGFuZ10pXHJcbn0pXHJcblxyXG5kaXJlY3Rpb25TY2VuZS5vbigndGV4dCcsIGFzeW5jIChjdHgpID0+IHtcclxuICAgIGN0eC5zZXNzaW9uLmRpcmVjdGlvbiA9IGN0eC5tZXNzYWdlLnRleHQ7XHJcbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5URUNITk9MT0dZKTtcclxufSk7XHJcbiJdfQ==