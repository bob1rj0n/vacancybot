import { Markup, Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const linkScene = new Scenes.BaseScene<MyContext>(SceneNames.LINK);

linkScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    let buttons = [];
    buttons.push([Markup.button.callback("✅ Ha", "✅"), Markup.button.callback("❌ Yo'q", "❌")]);

    await ctx.replyWithHTML(Messages.LinkQuestion[lang], Markup.keyboard(buttons).resize(true));
})

linkScene.hears(/✅/, async (ctx) => {
    await ctx.scene.enter(SceneNames.ENTER_LINK)
})

linkScene.hears(/❌/, async (ctx) => {
    ctx.session.link = null;
    await ctx.scene.enter(SceneNames.TIME_OF_WORK)
})
