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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2libGUuc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzMuc2NlbmVzL3Jlc3BvbnNpYmxlLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFrQztBQUNsQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBR25ELFFBQUEsZ0JBQWdCLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXhGLHdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDbEMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFFRix3QkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN0QyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMzQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDcEQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xyXG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9ib3QucGx1Z2luXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzcG9uc2libGVTY2VuZSA9IG5ldyBTY2VuZXMuQmFzZVNjZW5lPE15Q29udGV4dD4oU2NlbmVOYW1lcy5SRVNQT05TSUJMRSk7XHJcblxyXG5yZXNwb25zaWJsZVNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IGxhbmcgPSBjdHguc2Vzc2lvbi5sYW5ndWFnZTtcclxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKE1lc3NhZ2VzLlJlc3BvbnNpYmxlW2xhbmddKVxyXG59KVxyXG5cclxucmVzcG9uc2libGVTY2VuZS5vbigndGV4dCcsIGFzeW5jIChjdHgpID0+IHtcclxuICAgIGN0eC5zZXNzaW9uLnJlc3BvbnNpYmxlID0gY3R4Lm1lc3NhZ2UudGV4dDtcclxuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlRJTUVfVE9fQ0FMTF8yKVxyXG59KTtcclxuIl19