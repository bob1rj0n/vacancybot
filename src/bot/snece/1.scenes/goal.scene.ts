import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const goalScene = new Scenes.BaseScene<MyContext>(SceneNames.GOAL);

goalScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Goal[lang]);
})

goalScene.on('text', async (ctx) => {
    ctx.session.goal = ctx.message.text;
    await ctx.scene.enter(SceneNames.SEND_TO_ADMIN)
})
