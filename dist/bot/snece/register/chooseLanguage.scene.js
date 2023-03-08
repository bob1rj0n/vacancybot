"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseLanguageScene = void 0;
const telegraf_1 = require("telegraf");
const SceneName_1 = require("../../../common/constant/SceneName");
const user_model_1 = require("../../../common/db/model/user.model");
exports.chooseLanguageScene = new telegraf_1.Scenes.BaseScene(SceneName_1.SceneNames.CHOOSE_LANGUAGE);
exports.chooseLanguageScene.enter(async (ctx) => {
    const buttons = [];
    let button = [];
    button.push(telegraf_1.Markup.button.callback("🇺🇿 Uzbek", "🇺🇿"), telegraf_1.Markup.button.callback("🇬🇧 English", "🇬🇧"), telegraf_1.Markup.button.callback("🇷🇺 Русский", "🇷🇺"));
    buttons.push(button);
    await ctx.replyWithHTML(`
    <b> 🇺🇿 : Assalomu Alaykum👋</b>
<b>Tilni tanlang</b>

<b>🇷🇺 : Привет👋</b>
<b>Выберите язык</b>

<b>🇬🇧 : Hello👋</b>
<b>Select a language</b>
`, telegraf_1.Markup.keyboard(buttons).resize(true));
});
exports.chooseLanguageScene.hears(/🇺🇿/, async (ctx) => {
    ctx.session.language = "uz";
    await user_model_1.UserModel.updateOne({ userId: ctx.from.id }, { language: "uz" });
    await ctx.scene.enter(SceneName_1.SceneNames.PHONE_NUMBER);
});
exports.chooseLanguageScene.hears(/🇬🇧/, async (ctx) => {
    ctx.session.language = "en";
    await user_model_1.UserModel.updateOne({ userId: ctx.from.id }, { language: "en" });
    await ctx.scene.enter(SceneName_1.SceneNames.PHONE_NUMBER);
});
exports.chooseLanguageScene.hears(/🇷🇺/, async (ctx) => {
    ctx.session.language = "ru";
    await user_model_1.UserModel.updateOne({ userId: ctx.from.id }, { language: "ru" });
    await ctx.scene.enter(SceneName_1.SceneNames.PHONE_NUMBER);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlTGFuZ3VhZ2Uuc2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYm90L3NuZWNlL3JlZ2lzdGVyL2Nob29zZUxhbmd1YWdlLnNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUEwQztBQUMxQyxrRUFBZ0U7QUFDaEUsb0VBQWdFO0FBR25ELFFBQUEsbUJBQW1CLEdBQUcsSUFBSSxpQkFBTSxDQUFDLFNBQVMsQ0FBWSxzQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBRTlGLDJCQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFBO0lBQ2xCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtJQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBRSxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFFLGlCQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUN6SixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3BCLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQzs7Ozs7Ozs7O0NBUzNCLEVBQ1MsaUJBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDaEQsQ0FBQyxDQUFDLENBQUE7QUFFRiwyQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFFM0IsTUFBTSxzQkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFFdEUsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQyxDQUFBO0FBRUYsMkJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDNUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO0lBRTNCLE1BQU0sc0JBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBRXRFLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0JBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUMsQ0FBQTtBQUVGLDJCQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtJQUUzQixNQUFNLHNCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUV0RSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHNCQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDbEQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrdXAsIFNjZW5lcyB9IGZyb20gXCJ0ZWxlZ3JhZlwiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RiL21vZGVsL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi8uLi9wbHVnaW5zL2JvdC5wbHVnaW5cIjtcblxuZXhwb3J0IGNvbnN0IGNob29zZUxhbmd1YWdlU2NlbmUgPSBuZXcgU2NlbmVzLkJhc2VTY2VuZTxNeUNvbnRleHQ+KFNjZW5lTmFtZXMuQ0hPT1NFX0xBTkdVQUdFKVxuXG5jaG9vc2VMYW5ndWFnZVNjZW5lLmVudGVyKGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gW11cbiAgICBsZXQgYnV0dG9uID0gW11cbiAgICBidXR0b24ucHVzaChNYXJrdXAuYnV0dG9uLmNhbGxiYWNrKFwi8J+HuvCfh78gVXpiZWtcIiwgXCLwn4e68J+Hv1wiKSwgTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIvCfh6zwn4enIEVuZ2xpc2hcIiwgXCLwn4es8J+Hp1wiKSwgTWFya3VwLmJ1dHRvbi5jYWxsYmFjayhcIvCfh7fwn4e6INCg0YPRgdGB0LrQuNC5XCIsIFwi8J+Ht/Cfh7pcIikpXG4gICAgYnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICBhd2FpdCBjdHgucmVwbHlXaXRoSFRNTChgXG4gICAgPGI+IPCfh7rwn4e/IDogQXNzYWxvbXUgQWxheWt1bfCfkYs8L2I+XG48Yj5UaWxuaSB0YW5sYW5nPC9iPlxuXG48Yj7wn4e38J+HuiA6INCf0YDQuNCy0LXRgvCfkYs8L2I+XG48Yj7QktGL0LHQtdGA0LjRgtC1INGP0LfRi9C6PC9iPlxuXG48Yj7wn4es8J+HpyA6IEhlbGxv8J+RizwvYj5cbjxiPlNlbGVjdCBhIGxhbmd1YWdlPC9iPlxuYFxuICAgICAgICAsIE1hcmt1cC5rZXlib2FyZChidXR0b25zKS5yZXNpemUodHJ1ZSkpXG59KVxuXG5jaG9vc2VMYW5ndWFnZVNjZW5lLmhlYXJzKC/wn4e68J+Hvy8sIGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHguc2Vzc2lvbi5sYW5ndWFnZSA9IFwidXpcIlxuXG4gICAgYXdhaXQgVXNlck1vZGVsLnVwZGF0ZU9uZSh7IHVzZXJJZDogY3R4LmZyb20uaWQgfSwgeyBsYW5ndWFnZTogXCJ1elwiIH0pXG5cbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5QSE9ORV9OVU1CRVIpXG59KVxuXG5jaG9vc2VMYW5ndWFnZVNjZW5lLmhlYXJzKC/wn4es8J+Hpy8sIGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHguc2Vzc2lvbi5sYW5ndWFnZSA9IFwiZW5cIlxuXG4gICAgYXdhaXQgVXNlck1vZGVsLnVwZGF0ZU9uZSh7IHVzZXJJZDogY3R4LmZyb20uaWQgfSwgeyBsYW5ndWFnZTogXCJlblwiIH0pXG5cbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5QSE9ORV9OVU1CRVIpXG59KVxuXG5jaG9vc2VMYW5ndWFnZVNjZW5lLmhlYXJzKC/wn4e38J+Hui8sIGFzeW5jIChjdHgpID0+IHtcbiAgICBjdHguc2Vzc2lvbi5sYW5ndWFnZSA9IFwicnVcIlxuXG4gICAgYXdhaXQgVXNlck1vZGVsLnVwZGF0ZU9uZSh7IHVzZXJJZDogY3R4LmZyb20uaWQgfSwgeyBsYW5ndWFnZTogXCJydVwiIH0pXG5cbiAgICBhd2FpdCBjdHguc2NlbmUuZW50ZXIoU2NlbmVOYW1lcy5QSE9ORV9OVU1CRVIpXG59KVxuIl19