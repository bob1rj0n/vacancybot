import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const price2Scene = new Scenes.BaseScene<MyContext>(SceneNames.PRICE_2);

price2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.EnterPrice[lang])
})

price2Scene.on('text', async (ctx) => {
    let price = ctx.message.text;
    ctx.session.price_2 = price;
    await ctx.scene.enter(SceneNames.ADDITION_2)
})
