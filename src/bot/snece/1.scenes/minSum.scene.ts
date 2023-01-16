import { Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const minSumScene = new Scenes.BaseScene<MyContext>(SceneNames.MIN_SUM);

minSumScene.enter(async (ctx) => {
    await ctx.replyWithHTML("Min sum")
})

minSumScene.on('text', async (ctx) => {
    let minSum = ctx.message.text;
    if (Number(minSum)) {
        ctx.session.minSum = Number(minSum);
        await ctx.scene.enter(SceneNames.MAX_SUM)
    } else {
        await ctx.replyWithHTML("Raqam xato kiritildi!")
    }
})
