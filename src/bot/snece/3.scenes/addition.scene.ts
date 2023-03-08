import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const addition2Scene = new Scenes.BaseScene<MyContext>(SceneNames.ADDITION_2);

addition2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    let buttons = [];
    buttons.push([Markup.button.callback("⏩ O'tkazib yuborish", "⏩")])
    await ctx.replyWithHTML(Messages.Addition[lang])//, Markup.keyboard(buttons).resize(true));
})
// addition2Scene.hears(/⏩/, async (ctx) => {
//     ctx.session.addition = null;
//     await ctx.scene.enter(SceneNames.SEND_TO_ADMIN);
// })

addition2Scene.on('text', async (ctx) => {
    ctx.session.addition = ctx.message.text;
    await ctx.scene.enter(SceneNames.SEND_TO_ADMIN);
});
