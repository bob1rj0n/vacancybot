import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const directionScene = new Scenes.BaseScene<MyContext>(SceneNames.DIRECTION);

directionScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Direction[lang])
})

directionScene.on('text', async (ctx) => {
    ctx.session.direction = ctx.message.text;
    await ctx.scene.enter(SceneNames.TECHNOLOGY);
});
