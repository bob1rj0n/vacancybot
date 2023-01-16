import { SceneNames } from "../../common/constant/SceneName";
import { UserModel } from "../../common/db/model/user.model"

export async function botStart(ctx?) {
    try {
        let user;
        user = await UserModel.findOne({ userId: ctx.from.id })
        if (!user) {
            user = await UserModel.create({
                userId: ctx.from.id,
                firstName: ctx.from.first_name,
                userName: ctx.from.username,
                isBot: ctx.from.is_bot
            })
        };
        if (!user.language) {
            return await ctx.scene.enter(SceneNames.CHOOSE_LANGUAGE)
        }
        else if (!user.phoneNumber) {
            return await ctx.scene.enter(SceneNames.PHONE_NUMBER)
        }
        else {
            return await ctx.scene.enter(SceneNames.MAIN)
        }
    } catch (error) {
        console.log(error)
    }
}
