import { Scenes } from "telegraf";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const maxSumScene = new Scenes.BaseScene<MyContext>(SceneNames.MAX_SUM);

maxSumScene.enter(async (ctx) => {
    await ctx.replyWithHTML("Max sum")
})

maxSumScene.on('text', async (ctx) => {
    let maxSum = ctx.message.text;
    if (Number(maxSum) && Number(maxSum) > Number(ctx.session.minSum)) {
        ctx.session.maxSum = Number(maxSum);
        await ctx.scene.enter(SceneNames.PROFESSION)
    } else {
        await ctx.replyWithHTML("Raqam xato kiritildi!")
    }
})
