"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsibleScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.responsibleScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.RESPONSIBLE);
exports.responsibleScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.Responsible[lang]);
});
exports.responsibleScene.on('text', async (ctx) => {
    ctx.session.responsible = ctx.message.text;
    await ctx.scene.enter(SceneName_1.SceneNames.TIME_TO_CALL_2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2libGUuc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzMuc2NlbmVzL3Jlc3BvbnNpYmxlLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFrQztBQUNsQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBR25ELFFBQUEsZ0JBQWdCLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXhGLHdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDbEMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFFRix3QkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN0QyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDcEQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9ib3QucGx1Z2luXCI7XG5cbmV4cG9ydCBjb25zdCByZXNwb25zaWJsZVNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLlJFU1BPTlNJQkxFKTtcblxucmVzcG9uc2libGVTY2VuZS5lbnRlcihhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IGN0eC5zZXNzaW9uLmxhbmd1YWdlO1xuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKE1lc3NhZ2VzLlJlc3BvbnNpYmxlW2xhbmddKVxufSlcblxucmVzcG9uc2libGVTY2VuZS5vbigndGV4dCcsIGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHguc2Vzc2lvbi5yZXNwb25zaWJsZSA9IGN0eC5tZXNzYWdlLnRleHQ7XG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuVElNRV9UT19DQUxMXzIpXG59KTtcbiJdfQ==