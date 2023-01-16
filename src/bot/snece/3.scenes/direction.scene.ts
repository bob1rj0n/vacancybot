import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const direction2Scene = new Scenes.BaseScene<MyContext>(SceneNames.DIRECTION_2);

direction2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Direction[lang])
})

direction2Scene.on('text', async (ctx) => {
    ctx.session.direction = ctx.message.text;
    await ctx.scene.enter(SceneNames.TECHNOLOGY_2);
});
