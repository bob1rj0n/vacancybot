import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const enterLinkScene = new Scenes.BaseScene<MyContext>(SceneNames.ENTER_LINK);

enterLinkScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.EnterLink[lang], Markup.removeKeyboard());
})

enterLinkScene.on('text', async (ctx) => {
    let link = ctx.message.text;
    let a = link.substring(0, 8)
    if (a !== "https://") {
        link = `https://${link}`;
    }
    
    ctx.session.link = link;
    await ctx.scene.enter(SceneNames.TIME_OF_WORK);
});
