"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botPlugin = exports.bot = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const telegraf_1 = require("telegraf");
const telegraf_session_mongodb_1 = require("telegraf-session-mongodb");
const config_1 = require("../../common/config");
const main_scene_1 = require("../snece/0.scenes/main.scene");
const age_scene_1 = require("../snece/1.scenes/age.scene");
const connect_scene_1 = require("../snece/1.scenes/connect.scene");
const goal_scene_1 = require("../snece/1.scenes/goal.scene");
const name_scene_1 = require("../snece/1.scenes/name.scene");
const place_scene_1 = require("../snece/1.scenes/place.scene");
const profession_scene_1 = require("../snece/1.scenes/profession.scene");
const technology_scene_1 = require("../snece/1.scenes/technology.scene");
const timeToCall_scene_1 = require("../snece/1.scenes/timeToCall.scene");
const send_vacansy_scene_1 = require("../snece/2.scenes/send.vacansy.scene");
const phone_scene_1 = require("../snece/register/phone.scene");
const chooseLanguage_scene_1 = require("../snece/register/chooseLanguage.scene");
const bot_start_1 = require("../servers/bot.start");
const chooseVacansy_scene_1 = require("../snece/0.scenes/chooseVacansy.scene");
const officeName_scene_1 = require("../snece/3.scenes/officeName.scene");
const technology_scene_2 = require("../snece/3.scenes/technology.scene");
const place_scene_2 = require("../snece/3.scenes/place.scene");
const timeToCall_scene_2 = require("../snece/3.scenes/timeToCall.scene");
const timeOfWork_scene_1 = require("../snece/3.scenes/timeOfWork.scene");
const responsible_scene_1 = require("../snece/3.scenes/responsible.scene");
const changeLanguage_scene_1 = require("../snece/0.scenes/changeLanguage.scene");
const price_scene_1 = require("../snece/1.scenes/price.scene");
const direction_scene_1 = require("../snece/1.scenes/direction.scene");
const direction_scene_2 = require("../snece/3.scenes/direction.scene");
const myVacancy_scene_1 = require("../snece/4.scenes/myVacancy.scene");
const privacy_scene_1 = require("../snece/0.scenes/privacy.scene");
const price_scene_2 = require("../snece/3.scenes/price.scene");
const link_scene_1 = require("../snece/3.scenes/link.scene");
const enterLink_scene_1 = require("../snece/3.scenes/enterLink.scene");
const addition_scene_1 = require("../snece/3.scenes/addition.scene");
exports.bot = new telegraf_1.Telegraf(config_1.ENV.BOT_TOKEN);
const stages = new telegraf_1.Scenes.Stage([
    ///for register
    chooseLanguage_scene_1.chooseLanguageScene,
    phone_scene_1.phoneNumberScene,
    ///scenes
    main_scene_1.mainScene,
    name_scene_1.nameScene,
    age_scene_1.ageScene,
    technology_scene_1.technologyScene,
    place_scene_1.placeScene,
    connect_scene_1.connectScene,
    profession_scene_1.professionScene,
    timeToCall_scene_1.timeToCallScene,
    goal_scene_1.goalScene,
    send_vacansy_scene_1.sendToAdminScene,
    chooseVacansy_scene_1.chooseVacansyScene,
    direction_scene_1.directionScene,
    ///hodim kk
    officeName_scene_1.officeNameScene,
    technology_scene_2.technology2Scene,
    place_scene_2.place2Scene,
    timeToCall_scene_2.timeToCall2Scene,
    timeOfWork_scene_1.timeOfWorkScene,
    responsible_scene_1.responsibleScene,
    changeLanguage_scene_1.changeLanguageScene,
    price_scene_1.priceScene,
    direction_scene_2.direction2Scene,
    myVacancy_scene_1.myVacancyScene,
    privacy_scene_1.privacyScene,
    price_scene_2.price2Scene,
    link_scene_1.linkScene,
    enterLink_scene_1.enterLinkScene,
    addition_scene_1.addition2Scene,
]);
stages.command('start', bot_start_1.botStart);
async function plugin(server, opt, done) {
    server.post("/" + config_1.ENV.BOT_TOKEN, (req, res) => res.reply({ root: true }));
    exports.bot.use((0, telegraf_session_mongodb_1.session)(mongoose_1.default.connection.db, { collectionName: "sessions", sessionName: "session" }));
    exports.bot.use(stages.middleware());
    await server.register(require("@fastify/middie"));
    await server.register(exports.bot.webhookCallback("/" + config_1.ENV.BOT_TOKEN));
    exports.bot.start(bot_start_1.botStart);
    exports.bot.launch();
    done();
}
exports.botPlugin = (0, fastify_plugin_1.default)(plugin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LnBsdWdpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ib3QvcGx1Z2lucy9ib3QucGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBZ0M7QUFDaEMsZ0VBQWdDO0FBQ2hDLHVDQUE2RDtBQUM3RCx1RUFBbUQ7QUFDbkQsZ0RBQTBDO0FBRzFDLDZEQUF5RDtBQUN6RCwyREFBdUQ7QUFDdkQsbUVBQStEO0FBQy9ELDZEQUF5RDtBQUN6RCw2REFBeUQ7QUFDekQsK0RBQTJEO0FBQzNELHlFQUFxRTtBQUNyRSx5RUFBcUU7QUFDckUseUVBQXFFO0FBQ3JFLDZFQUF3RTtBQUN4RSwrREFBaUU7QUFDakUsaUZBQTZFO0FBQzdFLG9EQUFnRDtBQUNoRCwrRUFBMkU7QUFDM0UseUVBQXFFO0FBQ3JFLHlFQUFzRTtBQUN0RSwrREFBNEQ7QUFDNUQseUVBQXNFO0FBQ3RFLHlFQUFxRTtBQUNyRSwyRUFBdUU7QUFDdkUsaUZBQTZFO0FBQzdFLCtEQUEyRDtBQUMzRCx1RUFBbUU7QUFDbkUsdUVBQW9FO0FBQ3BFLHVFQUFtRTtBQUNuRSxtRUFBK0Q7QUFDL0QsK0RBQTREO0FBQzVELDZEQUF5RDtBQUN6RCx1RUFBbUU7QUFDbkUscUVBQWtFO0FBUXJELFFBQUEsR0FBRyxHQUFHLElBQUksbUJBQVEsQ0FBWSxZQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7QUFFekQsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBTSxDQUFDLEtBQUssQ0FBWTtJQUN2QyxlQUFlO0lBQ2YsMENBQW1CO0lBQ25CLDhCQUFnQjtJQUVoQixTQUFTO0lBQ1Qsc0JBQVM7SUFDVCxzQkFBUztJQUNULG9CQUFRO0lBQ1Isa0NBQWU7SUFDZix3QkFBVTtJQUNWLDRCQUFZO0lBQ1osa0NBQWU7SUFDZixrQ0FBZTtJQUNmLHNCQUFTO0lBQ1QscUNBQWdCO0lBQ2hCLHdDQUFrQjtJQUNsQixnQ0FBYztJQUVkLFdBQVc7SUFDWCxrQ0FBZTtJQUNmLG1DQUFnQjtJQUNoQix5QkFBVztJQUNYLG1DQUFnQjtJQUNoQixrQ0FBZTtJQUNmLG9DQUFnQjtJQUNoQiwwQ0FBbUI7SUFDbkIsd0JBQVU7SUFDVixpQ0FBZTtJQUNmLGdDQUFjO0lBQ2QsNEJBQVk7SUFDWix5QkFBVztJQUNYLHNCQUFTO0lBQ1QsZ0NBQWM7SUFDZCwrQkFBYztDQUNqQixDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxvQkFBUSxDQUFDLENBQUE7QUFFakMsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLFdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxrQ0FBTyxFQUFDLGtCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNoRyxXQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0lBQzVCLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0lBQ2pELE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxZQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtJQUMvRCxXQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFRLENBQUMsQ0FBQztJQUNwQixXQUFHLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDWixJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUM7QUFFWSxRQUFBLFNBQVMsR0FBRyxJQUFBLHdCQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnAgZnJvbSBcImZhc3RpZnktcGx1Z2luXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBDb250ZXh0LCBTY2VuZXMsIFRlbGVncmFmLCBNYXJrdXAgfSBmcm9tIFwidGVsZWdyYWZcIjtcbmltcG9ydCB7IHNlc3Npb24gfSBmcm9tIFwidGVsZWdyYWYtc2Vzc2lvbi1tb25nb2RiXCI7XG5pbXBvcnQgeyBFTlYgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RhbnQvU2NlbmVOYW1lXCI7XG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RiL21vZGVsL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IG1haW5TY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8wLnNjZW5lcy9tYWluLnNjZW5lXCI7XG5pbXBvcnQgeyBhZ2VTY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8xLnNjZW5lcy9hZ2Uuc2NlbmVcIjtcbmltcG9ydCB7IGNvbm5lY3RTY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8xLnNjZW5lcy9jb25uZWN0LnNjZW5lXCI7XG5pbXBvcnQgeyBnb2FsU2NlbmUgfSBmcm9tIFwiLi4vc25lY2UvMS5zY2VuZXMvZ29hbC5zY2VuZVwiO1xuaW1wb3J0IHsgbmFtZVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzEuc2NlbmVzL25hbWUuc2NlbmVcIjtcbmltcG9ydCB7IHBsYWNlU2NlbmUgfSBmcm9tIFwiLi4vc25lY2UvMS5zY2VuZXMvcGxhY2Uuc2NlbmVcIjtcbmltcG9ydCB7IHByb2Zlc3Npb25TY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8xLnNjZW5lcy9wcm9mZXNzaW9uLnNjZW5lXCI7XG5pbXBvcnQgeyB0ZWNobm9sb2d5U2NlbmUgfSBmcm9tIFwiLi4vc25lY2UvMS5zY2VuZXMvdGVjaG5vbG9neS5zY2VuZVwiO1xuaW1wb3J0IHsgdGltZVRvQ2FsbFNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzEuc2NlbmVzL3RpbWVUb0NhbGwuc2NlbmVcIjtcbmltcG9ydCB7IHNlbmRUb0FkbWluU2NlbmUgfSBmcm9tIFwiLi4vc25lY2UvMi5zY2VuZXMvc2VuZC52YWNhbnN5LnNjZW5lXCI7XG5pbXBvcnQgeyBwaG9uZU51bWJlclNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlL3JlZ2lzdGVyL3Bob25lLnNjZW5lXCI7XG5pbXBvcnQgeyBjaG9vc2VMYW5ndWFnZVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlL3JlZ2lzdGVyL2Nob29zZUxhbmd1YWdlLnNjZW5lXCI7XG5pbXBvcnQgeyBib3RTdGFydCB9IGZyb20gXCIuLi9zZXJ2ZXJzL2JvdC5zdGFydFwiO1xuaW1wb3J0IHsgY2hvb3NlVmFjYW5zeVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzAuc2NlbmVzL2Nob29zZVZhY2Fuc3kuc2NlbmVcIjtcbmltcG9ydCB7IG9mZmljZU5hbWVTY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8zLnNjZW5lcy9vZmZpY2VOYW1lLnNjZW5lXCI7XG5pbXBvcnQgeyB0ZWNobm9sb2d5MlNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzMuc2NlbmVzL3RlY2hub2xvZ3kuc2NlbmVcIjtcbmltcG9ydCB7IHBsYWNlMlNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzMuc2NlbmVzL3BsYWNlLnNjZW5lXCI7XG5pbXBvcnQgeyB0aW1lVG9DYWxsMlNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzMuc2NlbmVzL3RpbWVUb0NhbGwuc2NlbmVcIjtcbmltcG9ydCB7IHRpbWVPZldvcmtTY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8zLnNjZW5lcy90aW1lT2ZXb3JrLnNjZW5lXCI7XG5pbXBvcnQgeyByZXNwb25zaWJsZVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzMuc2NlbmVzL3Jlc3BvbnNpYmxlLnNjZW5lXCI7XG5pbXBvcnQgeyBjaGFuZ2VMYW5ndWFnZVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzAuc2NlbmVzL2NoYW5nZUxhbmd1YWdlLnNjZW5lXCI7XG5pbXBvcnQgeyBwcmljZVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzEuc2NlbmVzL3ByaWNlLnNjZW5lXCI7XG5pbXBvcnQgeyBkaXJlY3Rpb25TY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8xLnNjZW5lcy9kaXJlY3Rpb24uc2NlbmVcIjtcbmltcG9ydCB7IGRpcmVjdGlvbjJTY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8zLnNjZW5lcy9kaXJlY3Rpb24uc2NlbmVcIjtcbmltcG9ydCB7IG15VmFjYW5jeVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzQuc2NlbmVzL215VmFjYW5jeS5zY2VuZVwiO1xuaW1wb3J0IHsgcHJpdmFjeVNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzAuc2NlbmVzL3ByaXZhY3kuc2NlbmVcIjtcbmltcG9ydCB7IHByaWNlMlNjZW5lIH0gZnJvbSBcIi4uL3NuZWNlLzMuc2NlbmVzL3ByaWNlLnNjZW5lXCI7XG5pbXBvcnQgeyBsaW5rU2NlbmUgfSBmcm9tIFwiLi4vc25lY2UvMy5zY2VuZXMvbGluay5zY2VuZVwiO1xuaW1wb3J0IHsgZW50ZXJMaW5rU2NlbmUgfSBmcm9tIFwiLi4vc25lY2UvMy5zY2VuZXMvZW50ZXJMaW5rLnNjZW5lXCI7XG5pbXBvcnQgeyBhZGRpdGlvbjJTY2VuZSB9IGZyb20gXCIuLi9zbmVjZS8zLnNjZW5lcy9hZGRpdGlvbi5zY2VuZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE15Q29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICAgIHNlc3Npb246IGFueTtcbiAgICBzY2VuZTogU2NlbmVzLlNjZW5lQ29udGV4dFNjZW5lPE15Q29udGV4dD47XG4gICAgS2FtaW5hOiBcIkRhc3R1cmNoaVwiXG59XG5cbmV4cG9ydCBjb25zdCBib3QgPSBuZXcgVGVsZWdyYWY8TXlDb250ZXh0PihFTlYuQk9UX1RPS0VOKVxuXG5jb25zdCBzdGFnZXMgPSBuZXcgU2NlbmVzLlN0YWdlPE15Q29udGV4dD4oW1xuICAgIC8vL2ZvciByZWdpc3RlclxuICAgIGNob29zZUxhbmd1YWdlU2NlbmUsXG4gICAgcGhvbmVOdW1iZXJTY2VuZSxcblxuICAgIC8vL3NjZW5lc1xuICAgIG1haW5TY2VuZSxcbiAgICBuYW1lU2NlbmUsXG4gICAgYWdlU2NlbmUsXG4gICAgdGVjaG5vbG9neVNjZW5lLFxuICAgIHBsYWNlU2NlbmUsXG4gICAgY29ubmVjdFNjZW5lLFxuICAgIHByb2Zlc3Npb25TY2VuZSxcbiAgICB0aW1lVG9DYWxsU2NlbmUsXG4gICAgZ29hbFNjZW5lLFxuICAgIHNlbmRUb0FkbWluU2NlbmUsXG4gICAgY2hvb3NlVmFjYW5zeVNjZW5lLFxuICAgIGRpcmVjdGlvblNjZW5lLFxuXG4gICAgLy8vaG9kaW0ga2tcbiAgICBvZmZpY2VOYW1lU2NlbmUsXG4gICAgdGVjaG5vbG9neTJTY2VuZSxcbiAgICBwbGFjZTJTY2VuZSxcbiAgICB0aW1lVG9DYWxsMlNjZW5lLFxuICAgIHRpbWVPZldvcmtTY2VuZSxcbiAgICByZXNwb25zaWJsZVNjZW5lLFxuICAgIGNoYW5nZUxhbmd1YWdlU2NlbmUsXG4gICAgcHJpY2VTY2VuZSxcbiAgICBkaXJlY3Rpb24yU2NlbmUsXG4gICAgbXlWYWNhbmN5U2NlbmUsXG4gICAgcHJpdmFjeVNjZW5lLFxuICAgIHByaWNlMlNjZW5lLFxuICAgIGxpbmtTY2VuZSxcbiAgICBlbnRlckxpbmtTY2VuZSxcbiAgICBhZGRpdGlvbjJTY2VuZSxcbl0pXG5cbnN0YWdlcy5jb21tYW5kKCdzdGFydCcsIGJvdFN0YXJ0KVxuXG5hc3luYyBmdW5jdGlvbiBwbHVnaW4oc2VydmVyLCBvcHQsIGRvbmUpIHtcbiAgICBzZXJ2ZXIucG9zdChcIi9cIiArIEVOVi5CT1RfVE9LRU4sIChyZXEsIHJlcykgPT4gcmVzLnJlcGx5KHsgcm9vdDogdHJ1ZSB9KSlcbiAgICBib3QudXNlKHNlc3Npb24obW9uZ29vc2UuY29ubmVjdGlvbi5kYiwgeyBjb2xsZWN0aW9uTmFtZTogXCJzZXNzaW9uc1wiLCBzZXNzaW9uTmFtZTogXCJzZXNzaW9uXCIgfSkpXG4gICAgYm90LnVzZShzdGFnZXMubWlkZGxld2FyZSgpKVxuICAgIGF3YWl0IHNlcnZlci5yZWdpc3RlcihyZXF1aXJlKFwiQGZhc3RpZnkvbWlkZGllXCIpKVxuICAgIGF3YWl0IHNlcnZlci5yZWdpc3Rlcihib3Qud2ViaG9va0NhbGxiYWNrKFwiL1wiICsgRU5WLkJPVF9UT0tFTikpXG4gICAgYm90LnN0YXJ0KGJvdFN0YXJ0KTtcbiAgICBib3QubGF1bmNoKClcbiAgICBkb25lKClcbn1cblxuZXhwb3J0IGNvbnN0IGJvdFBsdWdpbiA9IGZwKHBsdWdpbik7XG4iXX0=