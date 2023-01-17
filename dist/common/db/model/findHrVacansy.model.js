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
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "minPrice", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], FindHrVacansy.prototype, "maxPrice", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEhyVmFjYW5zeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvZmluZEhyVmFjYW5zeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQTRFO0FBQzVFLDREQUF5RDtBQU1sRCxJQUFNLGFBQWEsR0FBbkIsTUFBTSxhQUFhO0NBK0R6QixDQUFBO0FBOURHO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzs2Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzs7MkNBQ2hCO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7a0RBQ1k7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzRDQUNNO0FBRWI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2lEQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztpREFDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7aURBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OytDQUNTO0FBRWhCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsrQ0FDUztBQUVoQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7K0NBQ1M7QUFFaEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O2dEQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztnREFDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7K0NBQ1M7QUFFaEI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNaO0FBM0RILGFBQWE7SUFKekIsSUFBQSx3QkFBWSxFQUFDO1FBQ1YsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLHlCQUFXLENBQUMsZUFBZSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7S0FDL0UsQ0FBQztHQUVXLGFBQWEsQ0ErRHpCO0FBL0RZLHNDQUFhO0FBaUViLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw0QkFBZ0IsRUFBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIG1vZGVsT3B0aW9ucywgcHJvcCB9IGZyb20gXCJAdHlwZWdvb3NlL3R5cGVnb29zZVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgICBzY2hlbWFPcHRpb25zOiB7IGNvbGxlY3Rpb246IENvbGxlY3Rpb25zLkZJTkRfSFJfVkFDQU5TWSwgdGltZXN0YW1wczogdHJ1ZSB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmluZEhyVmFjYW5zeSB7XHJcbiAgICBAcHJvcCgpXHJcbiAgICB1c2VySWQ6IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGRpcmVjdGlvbjogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoeyBkZWZhdWx0OiAnZmluZEhyJyB9KVxyXG4gICAgdHlwZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgb2ZmaWNlTmFtZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGVjaG5vbG9neTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcmVzcG9uc2libGU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHBsYWNlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBwcmljZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGdVc2VybmFtZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGltZU9mV29yazogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGltZVRvQ2FsbDogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWluUHJpY2U6IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG1heFByaWNlOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBtc2c6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGltZzogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgaGFzaHRlZ3M6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJNc2dJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWVzc2FnZUlkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBhZGRpdGlvbjogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoeyBkZWZhdWx0OiBudWxsIH0pXHJcbiAgICBsaW5rOiBzdHJpbmdcclxuXHJcbiAgICBjcmVhdGVkQXQ6IERhdGVcclxuICAgIHVwZGF0ZWRBdDogRGF0ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmluZEhyVmFjYW5zeU1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhGaW5kSHJWYWNhbnN5KTtcclxuIl19