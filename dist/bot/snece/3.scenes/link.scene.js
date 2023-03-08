"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.linkScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.LINK);
exports.linkScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    let buttons = [];
    buttons.push([telegraf_1.Markup.button.callback("✅ Ha", "✅"), telegraf_1.Markup.button.callback("❌ Yo'q", "❌")]);
    await ctx.replyWithHTML(messages_1.Messages.LinkQuestion[lang], telegraf_1.Markup.keyboard(buttons).resize(true));
});
exports.linkScene.hears(/✅/, async (ctx) => {
    await ctx.scene.enter(SceneName_1.SceneNames.ENTER_LINK);
});
exports.linkScene.hears(/❌/, async (ctx) => {
    ctx.session.link = null;
    await ctx.scene.enter(SceneName_1.SceneNames.TIME_OF_WORK);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ib3Qvc25lY2UvMy5zY2VuZXMvbGluay5zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBMEM7QUFDMUMsZ0VBQTZEO0FBQzdELGtFQUFnRTtBQUluRCxRQUFBLFNBQVMsR0FBRyxJQUFJLGlCQUFNLENBQUMsU0FBUyxDQUFZLHNCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFMUUsaUJBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzFCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2xDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRixNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsaUJBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEcsQ0FBQyxDQUFDLENBQUE7QUFFRixpQkFBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9CLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUMsQ0FBQTtBQUVGLGlCQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmt1cCwgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xuaW1wb3J0IHsgVmFjYW5jeU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYi9tb2RlbC92YWNhbmN5Lm1vZGVsXCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9ib3QucGx1Z2luXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rU2NlbmUgPSBuZXcgU2NlbmVzLkJhc2VTY2VuZTxNeUNvbnRleHQ+KFNjZW5lTmFtZXMuTElOSyk7XG5cbmxpbmtTY2VuZS5lbnRlcihhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IGN0eC5zZXNzaW9uLmxhbmd1YWdlO1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgYnV0dG9ucy5wdXNoKFtNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKFwi4pyFIEhhXCIsIFwi4pyFXCIpLCBNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKFwi4p2MIFlvJ3FcIiwgXCLinYxcIildKTtcblxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKE1lc3NhZ2VzLkxpbmtRdWVzdGlvbltsYW5nXSwgTWFya3VwLmtleWJvYXJkKGJ1dHRvbnMpLnJlc2l6ZSh0cnVlKSk7XG59KVxuXG5saW5rU2NlbmUuaGVhcnMoL+KchS8sIGFzeW5jIChjdHgpID0+IHtcbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5FTlRFUl9MSU5LKVxufSlcblxubGlua1NjZW5lLmhlYXJzKC/inYwvLCBhc3luYyAoY3R4KSA9PiB7XG4gICAgY3R4LnNlc3Npb24ubGluayA9IG51bGw7XG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuVElNRV9PRl9XT1JLKVxufSlcbiJdfQ==