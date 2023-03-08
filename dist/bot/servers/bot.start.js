"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botStart = void 0;
const SceneName_1 = require("../../common/constant/SceneName");
const user_model_1 = require("../../common/db/model/user.model");
async function botStart(ctx) {
    try {
        console.log(ctx.from);
        let user;
        user = await user_model_1.UserModel.findOne({ userId: ctx.from.id });
        if (!user) {
            user = await user_model_1.UserModel.create({
                userId: ctx.from.id,
                firstName: ctx.from.first_name,
                userName: ctx.from.username,
                isBot: ctx.from.is_bot
            });
        }
        ;
        if (!user.language) {
            return await ctx.scene.enter(SceneName_1.SceneNames.CHOOSE_LANGUAGE);
        }
        else if (!user.phoneNumber) {
            return await ctx.scene.enter(SceneName_1.SceneNames.PHONE_NUMBER);
        }
        else {
            return await ctx.scene.enter(SceneName_1.SceneNames.MAIN);
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.botStart = botStart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LnN0YXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2JvdC9zZXJ2ZXJzL2JvdC5zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBNkQ7QUFDN0QsaUVBQTREO0FBRXJELEtBQUssVUFBVSxRQUFRLENBQUMsR0FBSTtJQUMvQixJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEdBQUcsTUFBTSxzQkFBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksR0FBRyxNQUFNLHNCQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMxQixNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUM5QixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUMzQixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQ3pCLENBQUMsQ0FBQTtTQUNMO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLE9BQU8sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1NBQzNEO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDeEQ7YUFDSTtZQUNELE9BQU8sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2hEO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDckI7QUFDTCxDQUFDO0FBekJELDRCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0YW50L1NjZW5lTmFtZVwiO1xuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kYi9tb2RlbC91c2VyLm1vZGVsXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJvdFN0YXJ0KGN0eD8pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdHguZnJvbSk7XG4gICAgICAgIGxldCB1c2VyO1xuICAgICAgICB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoeyB1c2VySWQ6IGN0eC5mcm9tLmlkIH0pXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogY3R4LmZyb20uaWQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBjdHguZnJvbS5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBjdHguZnJvbS51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBpc0JvdDogY3R4LmZyb20uaXNfYm90XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXVzZXIubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5DSE9PU0VfTEFOR1VBR0UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXVzZXIucGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5QSE9ORV9OVU1CRVIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY3R4LnNjZW5lLmVudGVyKFNjZW5lTmFtZXMuTUFJTilcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cbiJdfQ==