"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.officeNameScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.officeNameScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.OFFICE_NAME);
exports.officeNameScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.OfficeName[lang], telegraf_1.Markup.removeKeyboard());
});
exports.officeNameScene.on('text', async (ctx) => {
    ctx.session.officeName = ctx.message.text;
    await ctx.scene.enter(SceneName_1.SceneNames.DIRECTION_2);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmaWNlTmFtZS5zY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ib3Qvc25lY2UvMy5zY2VuZXMvb2ZmaWNlTmFtZS5zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBMEM7QUFDMUMsZ0VBQTZEO0FBQzdELGtFQUFnRTtBQUduRCxRQUFBLGVBQWUsR0FBRyxJQUFJLGlCQUFNLENBQUMsU0FBUyxDQUFZLHNCQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdkYsdUJBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7QUFDL0UsQ0FBQyxDQUFDLENBQUE7QUFFRix1QkFBZSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUNqRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmt1cCwgU2NlbmVzIH0gZnJvbSBcInRlbGVncmFmXCI7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvbWVzc2FnZXNcIjtcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xuXG5leHBvcnQgY29uc3Qgb2ZmaWNlTmFtZVNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLk9GRklDRV9OQU1FKTtcblxub2ZmaWNlTmFtZVNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gY3R4LnNlc3Npb24ubGFuZ3VhZ2U7XG4gICAgYXdhaXQgY3R4LnJlcGx5V2l0aEhUTUwoTWVzc2FnZXMuT2ZmaWNlTmFtZVtsYW5nXSwgTWFya3VwLnJlbW92ZUtleWJvYXJkKCkpXG59KVxuXG5vZmZpY2VOYW1lU2NlbmUub24oJ3RleHQnLCBhc3luYyAoY3R4KSA9PiB7XG4gICAgY3R4LnNlc3Npb24ub2ZmaWNlTmFtZSA9IGN0eC5tZXNzYWdlLnRleHQ7XG4gICAgYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuRElSRUNUSU9OXzIpXG59KTtcbiJdfQ==