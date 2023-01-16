import { Markup, Scenes } from "telegraf";
import { Buttons, Messages } from "../../../common/constant/messages";
import { SceneNames } from "../../../common/constant/SceneName";
import { UserModel } from "../../../common/db/model/user.model";
import { VacancyModel } from "../../../common/db/model/vacancy.model";
import { MyContext } from "../../plugins/bot.plugin";

export const myVacancyScene = new Scenes.BaseScene<MyContext>(SceneNames.MY_VACANCY)

myVacancyScene.enter(async (ctx) => {
    const vacs = await VacancyModel.find({ userId: ctx.from.id });
    let Res = [], x = 0;
    for (const vac of vacs) {
        x++
        let res = `\n${x}. ${vac.direction}`
        Res.push(res);
    }

    await ctx.reply(Res.toString());
    await ctx.scene.enter(SceneNames.MAIN)
})
