"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxPriceScene = void 0;
const telegraf_1 = require("telegraf");
const SceneName_1 = require("../../../common/constant/SceneName");
exports.maxPriceScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.MAX_PRICE);
exports.maxPriceScene.enter(async (ctx) => {
    await ctx.replyWithHTML("Marhamat maksimal summani kiriting");
});
exports.maxPriceScene.on('text', async (ctx) => {
    let maxPrice = ctx.message.text;
    if (Number(maxPrice) && Number(maxPrice) > Number(ctx.session.minPrice)) {
        ctx.session.maxPrice = Number(maxPrice);
        await ctx.scene.enter(SceneName_1.SceneNames.SEND_TO_ADMIN);
    }
    else {
        await ctx.reply("Raqam xato kiritildi!");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4UHJpY2Uuc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlLzMuc2NlbmVzL21heFByaWNlLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFrQztBQUNsQyxrRUFBZ0U7QUFHbkQsUUFBQSxhQUFhLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5GLHFCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM5QixNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtBQUNqRSxDQUFDLENBQUMsQ0FBQTtBQUVGLHFCQUFhLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbkMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDaEMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JFLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDbEQ7U0FBTTtRQUNILE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0tBQzNDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZXMgfSBmcm9tIFwidGVsZWdyYWZcIjtcclxuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XHJcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi8uLi9wbHVnaW5zL2JvdC5wbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXhQcmljZVNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLk1BWF9QUklDRSk7XHJcblxyXG5tYXhQcmljZVNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcclxuICAgIGF3YWl0IGN0eC5yZXBseVdpdGhIVE1MKFwiTWFyaGFtYXQgbWFrc2ltYWwgc3VtbWFuaSBraXJpdGluZ1wiKVxyXG59KVxyXG5cclxubWF4UHJpY2VTY2VuZS5vbigndGV4dCcsIGFzeW5jIChjdHgpID0+IHtcclxuICAgIGxldCBtYXhQcmljZSA9IGN0eC5tZXNzYWdlLnRleHQ7XHJcbiAgICBpZiAoTnVtYmVyKG1heFByaWNlKSAmJiBOdW1iZXIobWF4UHJpY2UpID4gTnVtYmVyKGN0eC5zZXNzaW9uLm1pblByaWNlKSkge1xyXG4gICAgICAgIGN0eC5zZXNzaW9uLm1heFByaWNlID0gTnVtYmVyKG1heFByaWNlKTtcclxuICAgICAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5TRU5EX1RPX0FETUlOKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBjdHgucmVwbHkoXCJSYXFhbSB4YXRvIGtpcml0aWxkaSFcIilcclxuICAgIH1cclxufSk7XHJcbiJdfQ==