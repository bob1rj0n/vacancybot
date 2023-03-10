import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const placeScene = new Scenes.BaseScene<MyContext>(SceneNames.PLACE);

placeScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.EnterPlace[lang])
})

placeScene.on('text', async (ctx) => {
    ctx.session.place = ctx.message.text;
    await ctx.scene.enter(SceneNames.PRICE);
})

