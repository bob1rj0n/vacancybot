import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const connectScene = new Scenes.BaseScene<MyContext>(SceneNames.CONNECT);

connectScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.ConnectPhone[lang])
})

connectScene.on('text', async (ctx) => {
    const lang = ctx.session.language;
    let phone = Number(ctx.message.text);
    if (!phone || phone > 999000000000 || phone < 998000000000) {
        await ctx.replyWithHTML(Messages.ErrorToNumber[lang])
    } else {
        ctx.session.phone = ctx.message.text;
        await ctx.scene.enter(SceneNames.PLACE);
    }
})
