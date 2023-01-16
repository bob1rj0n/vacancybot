"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
const user_model_1 = require("../../../common/db/model/user.model");
exports.mainScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.MAIN);
exports.mainScene.enter(async (ctx) => {
    const user = await user_model_1.UserModel.findOne({ userId: ctx.from.id });
    if (user) {
        await user_model_1.UserModel.updateOne({
            userId: user.userId
        }, {
            $set: {
                userId: ctx.from.id,
                firstName: ctx.from.first_name,
                userName: ctx.from.username,
                language: ctx.session.language
            }
        });
    }
    const language = user.language;
    const buttons = [];
    buttons.push([telegraf_1.Markup.button.callback(messages_1.Buttons.Main[language]["📉"], "📉")]);
    buttons.push([telegraf_1.Markup.button.callback(messages_1.Buttons.Main[language]["📝"], "📝"), telegraf_1.Markup.button.callback(messages_1.Buttons.Main[language]["🔄"], "🔄")]);
    // buttons.push([Markup.button.callback(Buttons.Main[language]["📃"], "📃")])
    await ctx.replyWithHTML(messages_1.Messages.Meny[language], telegraf_1.Markup.keyboard(buttons).resize(true));
});
exports.mainScene.hears(/🔄/, async (ctx) => {
    await ctx.scene.enter(SceneName_1.SceneNames.CHANGE_LANGUAGE);
});
exports.mainScene.hears(/📉/, async (ctx) => {
    await ctx.scene.enter(SceneName_1.SceneNames.CHOOSE_VACANSY);
});
// mainScene.hears(/📃/, async (ctx) => {
//     await ctx.scene.enter(SceneNames.MY_VACANCY)
// })
exports.mainScene.hears(/📝/, async (ctx) => {
    await ctx.scene.enter(SceneName_1.SceneNames.PRIVACY);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5zY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ib3Qvc25lY2UvMC5zY2VuZXMvbWFpbi5zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBMEM7QUFDMUMsZ0VBQXNFO0FBQ3RFLGtFQUFnRTtBQUNoRSxvRUFBZ0U7QUFHbkQsUUFBQSxTQUFTLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRXpFLGlCQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMxQixNQUFNLElBQUksR0FBRyxNQUFNLHNCQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUM3RCxJQUFJLElBQUksRUFBRTtRQUNOLE1BQU0sc0JBQVMsQ0FBQyxTQUFTLENBQ3JCO1lBQ0ksTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLEVBQ0Q7WUFDSSxJQUFJLEVBQUU7Z0JBQ0YsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFDOUIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDM0IsUUFBUSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUTthQUNqQztTQUNKLENBQ0osQ0FBQTtLQUNKO0lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUE7SUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDMUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3RJLDZFQUE2RTtJQUU3RSxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDM0YsQ0FBQyxDQUFDLENBQUE7QUFFRixpQkFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLGlCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3BELENBQUMsQ0FBQyxDQUFBO0FBQ0YseUNBQXlDO0FBQ3pDLG1EQUFtRDtBQUNuRCxLQUFLO0FBQ0wsaUJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDN0MsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrdXAsIFNjZW5lcyB9IGZyb20gXCJ0ZWxlZ3JhZlwiO1xyXG5pbXBvcnQgeyBCdXR0b25zLCBNZXNzYWdlcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvbWVzc2FnZXNcIjtcclxuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGIvbW9kZWwvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9ib3QucGx1Z2luXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLk1BSU4pXHJcblxyXG5tYWluU2NlbmUuZW50ZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHsgdXNlcklkOiBjdHguZnJvbS5pZCB9KVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBhd2FpdCBVc2VyTW9kZWwudXBkYXRlT25lKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGN0eC5mcm9tLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogY3R4LmZyb20uZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogY3R4LmZyb20udXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGN0eC5zZXNzaW9uLmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHVzZXIubGFuZ3VhZ2U7XHJcbiAgICBjb25zdCBidXR0b25zID0gW11cclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhCdXR0b25zLk1haW5bbGFuZ3VhZ2VdW1wi8J+TiVwiXSwgXCLwn5OJXCIpXSlcclxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhCdXR0b25zLk1haW5bbGFuZ3VhZ2VdW1wi8J+TnVwiXSwgXCLwn5OdXCIpLCBNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKEJ1dHRvbnMuTWFpbltsYW5ndWFnZV1bXCLwn5SEXCJdLCBcIvCflIRcIildKVxyXG4gICAgLy8gYnV0dG9ucy5wdXNoKFtNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKEJ1dHRvbnMuTWFpbltsYW5ndWFnZV1bXCLwn5ODXCJdLCBcIvCfk4NcIildKVxyXG5cclxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKE1lc3NhZ2VzLk1lbnlbbGFuZ3VhZ2VdLCBNYXJrdXAua2V5Ym9hcmQoYnV0dG9ucykucmVzaXplKHRydWUpKVxyXG59KVxyXG5cclxubWFpblNjZW5lLmhlYXJzKC/wn5SELywgYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuQ0hBTkdFX0xBTkdVQUdFKVxyXG59KVxyXG5cclxubWFpblNjZW5lLmhlYXJzKC/wn5OJLywgYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuQ0hPT1NFX1ZBQ0FOU1kpXHJcbn0pXHJcbi8vIG1haW5TY2VuZS5oZWFycygv8J+Tgy8sIGFzeW5jIChjdHgpID0+IHtcclxuLy8gICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLk1ZX1ZBQ0FOQ1kpXHJcbi8vIH0pXHJcbm1haW5TY2VuZS5oZWFycygv8J+TnS8sIGFzeW5jIChjdHgpID0+IHtcclxuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlBSSVZBQ1kpXHJcbn0pXHJcbiJdfQ==