"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.price2Scene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.price2Scene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.PRICE_2);
exports.price2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(messages_1.Messages.EnterPrice[lang]);
});
exports.price2Scene.on('text', async (ctx) => {
    let price = ctx.message.text;
    ctx.session.price_2 = price;
    await ctx.scene.enter(SceneName_1.SceneNames.SEND_TO_ADMIN);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2Uuc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzMuc2NlbmVzL3ByaWNlLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFrQztBQUNsQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBSW5ELFFBQUEsV0FBVyxHQUFHLElBQUksaUJBQU0sQ0FBQyxTQUFTLENBQVksc0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvRSxtQkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDNUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDbEMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFDLENBQUE7QUFFRixtQkFBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUM1QixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDbkQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xyXG5pbXBvcnQgeyBWYWNhbmN5TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL3ZhY2FuY3kubW9kZWxcIjtcclxuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlMlNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLlBSSUNFXzIpO1xyXG5cclxucHJpY2UyU2NlbmUuZW50ZXIoYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgbGFuZyA9IGN0eC5zZXNzaW9uLmxhbmd1YWdlO1xyXG4gICAgYXdhaXQgY3R4LnJlcGx5V2l0aEhUTUwoTWVzc2FnZXMuRW50ZXJQcmljZVtsYW5nXSlcclxufSlcclxuXHJcbnByaWNlMlNjZW5lLm9uKCd0ZXh0JywgYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgbGV0IHByaWNlID0gY3R4Lm1lc3NhZ2UudGV4dDtcclxuICAgIGN0eC5zZXNzaW9uLnByaWNlXzIgPSBwcmljZTtcclxuICAgIGF3YWl0IGN0eC5zY2VuZS5lbnRlcihTY2VuZU5hbWVzLlNFTkRfVE9fQURNSU4pXHJcbn0pXHJcbiJdfQ==