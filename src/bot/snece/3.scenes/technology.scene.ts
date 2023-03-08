import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { generateHashtag } from "../../../common/service/functions";
import { MyContext } from "../../plugins/bot.plugin";

export const technology2Scene = new Scenes.BaseScene<MyContext>(SceneNames.TECHNOLOGY_2);

technology2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.Technology[lang])
})

technology2Scene.on('text', async (ctx) => {
    let tech = ctx.message.text;
    ctx.session.technology_2 = tech;
    await ctx.scene.enter(SceneNames.PLACE_2)
});
