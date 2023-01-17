import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const timeOfWorkScene = new Scenes.BaseScene<MyContext>(SceneNames.TIME_OF_WORK);

timeOfWorkScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.TimeOfWork[lang], Markup.removeKeyboard());
})

timeOfWorkScene.on('text', async (ctx) => {
    ctx.session.timeOfWork = ctx.message.text;
    await ctx.scene.enter(SceneNames.PRICE_2)
});
