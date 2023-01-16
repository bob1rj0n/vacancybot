import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { MyContext } from "../../plugins/bot.plugin";

export const officeNameScene = new Scenes.BaseScene<MyContext>(SceneNames.OFFICE_NAME);

officeNameScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.OfficeName[lang], Markup.removeKeyboard())
})

officeNameScene.on('text', async (ctx) => {
    ctx.session.officeName = ctx.message.text;
    await ctx.scene.enter(SceneNames.DIRECTION_2)
});
