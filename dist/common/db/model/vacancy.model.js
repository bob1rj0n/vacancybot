"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancyModel = exports.Vacancy = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../constant/collections");
let Vacancy = class Vacancy {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "direction", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: 'findWork' }),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "age", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "technology", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "tgUsername", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "place", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "minSum", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "maxSum", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "profession", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "timeToCall", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "goal", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "msg", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "userMsgId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", Number)
], Vacancy.prototype, "messageId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({}),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "img", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "hashtegs", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Vacancy.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: undefined }),
    tslib_1.__metadata("design:type", Date)
], Vacancy.prototype, "deletedAt", void 0);
Vacancy = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.Collections.VACANCY,
            timestamps: true
        }
    })
], Vacancy);
exports.Vacancy = Vacancy;
exports.VacancyModel = (0, typegoose_1.getModelForClass)(Vacancy);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjYW5jeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLDREQUF5RDtBQVVsRCxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQU87Q0FxRW5CLENBQUE7QUFwRUc7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3VDQUNPO0FBRWQ7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDOztxQ0FDbEI7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7cUNBQ0s7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7b0NBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzJDQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsyQ0FDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3FDQUNLO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzswQ0FDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt5Q0FDUztBQUVoQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7MENBQ047QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7c0NBQ2pCLElBQUk7MENBQUM7QUFqRVIsT0FBTztJQVJuQixJQUFBLHdCQUFZLEVBQUM7UUFDVixhQUFhLEVBQUU7WUFDWCxVQUFVLEVBQUUseUJBQVcsQ0FBQyxPQUFPO1lBQy9CLFVBQVUsRUFBRSxJQUFJO1NBQ25CO0tBQ0osQ0FBQztHQUdXLE9BQU8sQ0FxRW5CO0FBckVZLDBCQUFPO0FBdUVQLFFBQUEsWUFBWSxHQUFHLElBQUEsNEJBQWdCLEVBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNb2RlbEZvckNsYXNzLCBJbmRleCwgbW9kZWxPcHRpb25zLCBwcm9wLCBSZWYgfSBmcm9tIFwiQHR5cGVnb29zZS90eXBlZ29vc2VcIjtcclxuaW1wb3J0IHsgQ29sbGVjdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvY29sbGVjdGlvbnNcIjtcclxuXHJcbkBtb2RlbE9wdGlvbnMoe1xyXG4gICAgc2NoZW1hT3B0aW9uczoge1xyXG4gICAgICAgIGNvbGxlY3Rpb246IENvbGxlY3Rpb25zLlZBQ0FOQ1ksXHJcbiAgICAgICAgdGltZXN0YW1wczogdHJ1ZVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWNhbmN5IHtcclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgZGlyZWN0aW9uOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCh7IGRlZmF1bHQ6ICdmaW5kV29yaycgfSlcclxuICAgIHR5cGU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG5hbWU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGFnZTogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGVjaG5vbG9neTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdGdVc2VybmFtZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcGhvbmU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHBsYWNlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBwcmljZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWluU3VtOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBtYXhTdW06IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHByb2Zlc3Npb246IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRpbWVUb0NhbGw6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGdvYWw6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKHt9KVxyXG4gICAgbXNnOiBzdHJpbmc7XHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgdXNlck1zZ0lkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBtZXNzYWdlSWQ6IG51bWJlclxyXG5cclxuICAgIEBwcm9wKHt9KVxyXG4gICAgaW1nOiBzdHJpbmc7XHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgaGFzaHRlZ3M6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogZmFsc2UgfSlcclxuICAgIGlzRGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBAcHJvcCh7IGRlZmF1bHQ6IHVuZGVmaW5lZCB9KVxyXG4gICAgZGVsZXRlZEF0PzogRGF0ZTtcclxuXHJcbiAgICBjcmVhdGVkQXQ/OiBEYXRlO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVmFjYW5jeU1vZGVsID0gZ2V0TW9kZWxGb3JDbGFzcyhWYWNhbmN5KTtcclxuIl19