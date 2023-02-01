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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEhyVmFjYW5zeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvZmluZEhyVmFjYW5zeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTRFO0FBQzVFLDREQUF5RDtBQU1sRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFhO0NBNER6QixDQUFBO0FBM0RHO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzs2Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7MkNBQ2hCO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7a0RBQ1k7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7aURBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNJO0FBRVg7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNJO0FBRVg7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OytDQUNTO0FBRWhCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7Z0RBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OytDQUNTO0FBRWhCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztrREFDWTtBQUVuQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ1o7QUF4REgsYUFBYTtJQUp6QixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUseUJBQVcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtLQUMvRSxDQUFDO0dBRVcsYUFBYSxDQTREekI7QUE1RFksc0NBQWE7QUE4RGIsUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDRCQUFnQixFQUFDLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50L2NvbGxlY3Rpb25zXCI7XHJcblxyXG5AbW9kZWxPcHRpb25zKHtcclxuICAgIHNjaGVtYU9wdGlvbnM6IHsgY29sbGVjdGlvbjogQ29sbGVjdGlvbnMuRklORF9IUl9WQUNBTlNZLCB0aW1lc3RhbXBzOiB0cnVlIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5kSHJWYWNhbnN5IHtcclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgZGlyZWN0aW9uOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCh7IGRlZmF1bHQ6ICdmaW5kSHInIH0pXHJcbiAgICB0eXBlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBvZmZpY2VOYW1lOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0ZWNobm9sb2d5OiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICByZXNwb25zaWJsZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcGxhY2U6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHByaWNlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0Z1VzZXJuYW1lOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0aW1lT2ZXb3JrOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0aW1lVG9DYWxsOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBtc2c6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGltZzogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgaGFzaHRlZ3M6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJNc2dJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWVzc2FnZUlkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBhZGRpdGlvbjogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdmFjYW5jeVR5cGU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogbnVsbCB9KVxyXG4gICAgbGluazogc3RyaW5nXHJcblxyXG4gICAgY3JlYXRlZEF0OiBEYXRlXHJcbiAgICB1cGRhdGVkQXQ6IERhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbmRIclZhY2Fuc3lNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoRmluZEhyVmFjYW5zeSk7XHJcbiJdfQ==