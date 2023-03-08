import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { generateHashtag } from "../../../common/service/functions";
import { MyContext } from "../../plugins/bot.plugin";

export const place2Scene = new Scenes.BaseScene<MyContext>(SceneNames.PLACE_2);

place2Scene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.EnterPlace[lang]);
})

place2Scene.on('text', async (ctx) => {
    ctx.session.place_2 = ctx.message.text;
    ctx.session.hashtegs = await generateHashtag(`ish_joyi, ${ctx.session.direction}, ${ctx.session.place_2}`);
    await ctx.scene.enter(SceneNames.RESPONSIBLE);
})

