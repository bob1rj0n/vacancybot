import { Scenes } from "telegraf";
import { Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const ageScene = new Scenes.BaseScene<MyContext>(SceneNames.AGE);

ageScene.enter(async (ctx) => {
    const lang = ctx.session.language;
    await ctx.replyWithHTML(Messages.AGE[lang])
})

ageScene.on('text', async (ctx) => {
    const lang = ctx.session.language;
    let age = ctx.message.text;
    if (Number(age)) {
        ctx.session.age = Number(age);
        await ctx.scene.enter(SceneNames.DIRECTION)
    } else {
        await ctx.replyWithHTML("Faqat raqam kiriting!")
    }
})
