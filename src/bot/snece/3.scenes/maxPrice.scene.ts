import { Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const maxPriceScene = new Scenes.BaseScene<MyContext>(SceneNames.MAX_PRICE);

maxPriceScene.enter(async (ctx) => {
    await ctx.replyWithHTML("Marhamat maksimal summani kiriting")
})

maxPriceScene.on('text', async (ctx) => {
    let maxPrice = ctx.message.text;
    if (Number(maxPrice) && Number(maxPrice) > Number(ctx.session.minPrice)) {
        ctx.session.maxPrice = Number(maxPrice);
        await ctx.scene.enter(SceneNames.SEND_TO_ADMIN)
    } else {
        await ctx.reply("Raqam xato kiritildi!")
    }
});
