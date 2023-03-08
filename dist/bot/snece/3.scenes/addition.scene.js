"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition2Scene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.addition2Scene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.ADDITION_2);
exports.addition2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    let buttons = [];
    buttons.push([telegraf_1.Markup.button.callback("⏩ O'tkazib yuborish", "⏩")]);
    await ctx.replyWithHTML(messages_1.Messages.Addition[lang]); //, Markup.keyboard(buttons).resize(true));
});
// addition2Scene.hears(/⏩/, async (ctx) => {
//     ctx.session.addition = null;
//     await ctx.scene.enter(SceneNames.SEND_TO_ADMIN);
// })
exports.addition2Scene.on('text', async (ctx) => {
    ctx.session.addition = ctx.message.text;
    await ctx.scene.enter(SceneName_1.SceneNames.SEND_TO_ADMIN);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRpb24uc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzMuc2NlbmVzL2FkZGl0aW9uLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUEwQztBQUMxQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBR25ELFFBQUEsY0FBYyxHQUFHLElBQUksaUJBQU0sQ0FBQyxTQUFTLENBQVksc0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyRixzQkFBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDbEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUEsMkNBQTJDO0FBQy9GLENBQUMsQ0FBQyxDQUFBO0FBQ0YsNkNBQTZDO0FBQzdDLG1DQUFtQztBQUNuQyx1REFBdUQ7QUFDdkQsS0FBSztBQUVMLHNCQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFya3VwLCBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9ib3QucGx1Z2luXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRpdGlvbjJTY2VuZSA9IG5ldyBTY2VuZXMuQmFzZVNjZW5lPE15Q29udGV4dD4oU2NlbmVOYW1lcy5BRERJVElPTl8yKTtcblxuYWRkaXRpb24yU2NlbmUuZW50ZXIoYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSBjdHguc2Vzc2lvbi5sYW5ndWFnZTtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIuKPqSBPJ3RrYXppYiB5dWJvcmlzaFwiLCBcIuKPqVwiKV0pXG4gICAgYXdhaXQgY3R4LnJlcGx5V2l0aEhUTUwoTWVzc2FnZXMuQWRkaXRpb25bbGFuZ10pLy8sIE1hcmt1cC5rZXlib2FyZChidXR0b25zKS5yZXNpemUodHJ1ZSkpO1xufSlcbi8vIGFkZGl0aW9uMlNjZW5lLmhlYXJzKC/ij6kvLCBhc3luYyAoY3R4KSA9PiB7XG4vLyAgICAgY3R4LnNlc3Npb24uYWRkaXRpb24gPSBudWxsO1xuLy8gICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlNFTkRfVE9fQURNSU4pO1xuLy8gfSlcblxuYWRkaXRpb24yU2NlbmUub24oJ3RleHQnLCBhc3luYyAoY3R4KSA9PiB7XG4gICAgY3R4LnNlc3Npb24uYWRkaXRpb24gPSBjdHgubWVzc2FnZS50ZXh0O1xuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlNFTkRfVE9fQURNSU4pO1xufSk7XG4iXX0=