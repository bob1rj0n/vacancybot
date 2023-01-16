import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const priceScene = new Scenes.BaseScene<MyContext>(SceneNames.PRICE);

priceScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.EnterPrice[lang])
})

priceScene.on('text', async (ctx) => {
    let price = ctx.message.text;
    ctx.session.price = price;
    await ctx.scene.enter(SceneNames.PROFESSION)
})
