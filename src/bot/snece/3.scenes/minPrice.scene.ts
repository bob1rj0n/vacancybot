import { Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const minPriceScene = new Scenes.BaseScene<MyContext>(SceneNames.MIN_PRICE);

minPriceScene.enter(async (ctx) => {
    await ctx.replyWithHTML("Marhamat minimal summani kiriting")
})

minPriceScene.on('text', async (ctx) => {
    let minPrice = ctx.message.text;
    if (Number(minPrice)) {
        ctx.session.minPrice = Number(minPrice);
        await ctx.scene.enter(SceneNames.MAX_PRICE)
    } else {
        await ctx.reply("Raqam xato kiritildi!")
    }
});
