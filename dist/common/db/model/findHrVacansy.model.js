"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindHrVacansyModel = exports.FindHrVacansy = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../constant/collections");
let FindHrVacansy = class FindHrVacansy {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "direction", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: 'findHr' }),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "officeName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "technology", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "responsible", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "place", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "tgUsername", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "timeOfWork", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "timeToCall", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "msg", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "img", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "hashtegs", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "userMsgId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "messageId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "addition", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "vacancyType", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: null }),
    tslib_1.__metadata("design:type", String)
], FindHrVacansy.prototype, "link", void 0);
FindHrVacansy = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: { collection: collections_1.Collections.FIND_HR_VACANSY, timestamps: true }
    })
], FindHrVacansy);
exports.FindHrVacansy = FindHrVacansy;
exports.FindHrVacansyModel = (0, typegoose_1.getModelForClass)(FindHrVacansy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEhyVmFjYW5zeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvZmluZEhyVmFjYW5zeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTRFO0FBQzVFLDREQUF5RDtBQU1sRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFhO0NBNER6QixDQUFBO0FBM0RHO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzs2Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7MkNBQ2hCO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7a0RBQ1k7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7aURBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNJO0FBRVg7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNJO0FBRVg7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OytDQUNTO0FBRWhCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7Z0RBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OytDQUNTO0FBRWhCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztrREFDWTtBQUVuQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ1o7QUF4REgsYUFBYTtJQUp6QixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUseUJBQVcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtLQUMvRSxDQUFDO0dBRVcsYUFBYSxDQTREekI7QUE1RFksc0NBQWE7QUE4RGIsUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDRCQUFnQixFQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xuXG5AbW9kZWxPcHRpb25zKHtcbiAgICBzY2hlbWFPcHRpb25zOiB7IGNvbGxlY3Rpb246IENvbGxlY3Rpb25zLkZJTkRfSFJfVkFDQU5TWSwgdGltZXN0YW1wczogdHJ1ZSB9XG59KVxuXG5leHBvcnQgY2xhc3MgRmluZEhyVmFjYW5zeSB7XG4gICAgQHByb3AoKVxuICAgIHVzZXJJZDogbnVtYmVyXG5cbiAgICBAcHJvcCgpXG4gICAgZGlyZWN0aW9uOiBzdHJpbmdcblxuICAgIEBwcm9wKHsgZGVmYXVsdDogJ2ZpbmRIcicgfSlcbiAgICB0eXBlOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICBvZmZpY2VOYW1lOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICB0ZWNobm9sb2d5OiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICByZXNwb25zaWJsZTogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgcGxhY2U6IHN0cmluZ1xuXG4gICAgQHByb3AoKVxuICAgIHByaWNlOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICB0Z1VzZXJuYW1lOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICB0aW1lT2ZXb3JrOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICB0aW1lVG9DYWxsOiBzdHJpbmdcblxuICAgIEBwcm9wKClcbiAgICBtc2c6IHN0cmluZ1xuXG4gICAgQHByb3AoKVxuICAgIGltZzogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgaGFzaHRlZ3M6IHN0cmluZ1xuXG4gICAgQHByb3AoKVxuICAgIHVzZXJNc2dJZDogbnVtYmVyXG5cbiAgICBAcHJvcCgpXG4gICAgbWVzc2FnZUlkOiBudW1iZXJcblxuICAgIEBwcm9wKClcbiAgICBhZGRpdGlvbjogc3RyaW5nXG5cbiAgICBAcHJvcCgpXG4gICAgdmFjYW5jeVR5cGU6IHN0cmluZ1xuXG4gICAgQHByb3AoeyBkZWZhdWx0OiBudWxsIH0pXG4gICAgbGluazogc3RyaW5nXG5cbiAgICBjcmVhdGVkQXQ6IERhdGVcbiAgICB1cGRhdGVkQXQ6IERhdGVcbn1cblxuZXhwb3J0IGNvbnN0IEZpbmRIclZhY2Fuc3lNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoRmluZEhyVmFjYW5zeSk7XG4iXX0=