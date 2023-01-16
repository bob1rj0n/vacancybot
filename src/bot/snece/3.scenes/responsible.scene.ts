import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const responsibleScene = new Scenes.BaseScene<MyContext>(SceneNames.RESPONSIBLE);

responsibleScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Responsible[lang])
})

responsibleScene.on('text', async (ctx) => {
    ctx.session.responsible = ctx.message.text;
    await ctx.scene.enter(SceneNames.TIME_TO_CALL_2)
});
