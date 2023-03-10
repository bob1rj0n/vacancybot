"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneNumberScene = void 0;
const telegraf_1 = require("telegraf");
const messages_1 = require("../../../common/constant/messages");
const SceneName_1 = require("../../../common/constant/SceneName");
const user_model_1 = require("../../../common/db/model/user.model");
exports.phoneNumberScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.PHONE_NUMBER);
exports.phoneNumberScene.enter(async (ctx) => {
    let buttons = [];
    const language = ctx.session.language;
    buttons.push([telegraf_1.Markup.button.contactRequest(messages_1.Messages.PhoneButton[language])]);
    await ctx.replyWithHTML(messages_1.Messages.Phone[language], telegraf_1.Markup.keyboard(buttons).resize());
});
exports.phoneNumberScene.on("contact", async (ctx) => {
    const phone = ctx.message.contact.phone_number;
    await user_model_1.UserModel.updateOne({ userId: ctx.from.id }, { phoneNumber: phone });
    await ctx.scene.enter(SceneName_1.SceneNames.MAIN);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUuc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlL3JlZ2lzdGVyL3Bob25lLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUEwQztBQUMxQyxnRUFBNkQ7QUFDN0Qsa0VBQWdFO0FBQ2hFLG9FQUFnRTtBQUluRCxRQUFBLGdCQUFnQixHQUFHLElBQUksaUJBQU0sQ0FBQyxTQUFTLENBQVksc0JBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6Rix3QkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2pDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQTtJQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVFLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxpQkFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQ3hGLENBQUMsQ0FBQyxDQUFDO0FBR0gsd0JBQWdCLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBRS9DLE1BQU0sc0JBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzFFLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUxQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBNYXJrdXAsIFNjZW5lcyB9IGZyb20gXCJ0ZWxlZ3JhZlwiO1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50L21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBTY2VuZU5hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb25zdGFudC9TY2VuZU5hbWVcIjtcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGIvbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BsdWdpbnMvYm90LnBsdWdpblwiO1xuXG5cbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclNjZW5lID0gbmV3IFNjZW5lcy5CYXNlU2NlbmU8TXlDb250ZXh0PihTY2VuZU5hbWVzLlBIT05FX05VTUJFUik7XG5cbnBob25lTnVtYmVyU2NlbmUuZW50ZXIoYXN5bmMgKGN0eCkgPT4ge1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBjdHguc2Vzc2lvbi5sYW5ndWFnZVxuICAgIGJ1dHRvbnMucHVzaChbTWFya3VwLmJ1dHRvbi5jb250YWN0UmVxdWVzdChNZXNzYWdlcy5QaG9uZUJ1dHRvbltsYW5ndWFnZV0pXSlcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChNZXNzYWdlcy5QaG9uZVtsYW5ndWFnZV0sIE1hcmt1cC5rZXlib2FyZChidXR0b25zKS5yZXNpemUoKSlcbn0pO1xuXG5cbnBob25lTnVtYmVyU2NlbmUub24oXCJjb250YWN0XCIsIGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCBwaG9uZSA9IGN0eC5tZXNzYWdlLmNvbnRhY3QucGhvbmVfbnVtYmVyO1xuXG4gICAgYXdhaXQgVXNlck1vZGVsLnVwZGF0ZU9uZSh7IHVzZXJJZDogY3R4LmZyb20uaWQgfSwgeyBwaG9uZU51bWJlcjogcGhvbmUgfSlcbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5NQUlOKVxuXG59KTtcblxuIl19