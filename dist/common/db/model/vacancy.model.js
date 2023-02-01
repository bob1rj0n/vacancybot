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
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], Vacancy.prototype, "vacancyType", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjYW5jeS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvdmFjYW5jeS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0RBQXdGO0FBQ3hGLDREQUF5RDtBQVVsRCxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQU87Q0F3RW5CLENBQUE7QUF2RUc7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3VDQUNPO0FBRWQ7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzBDQUNVO0FBRWpCO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDOztxQ0FDbEI7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7cUNBQ0s7QUFFWjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7b0NBQ0k7QUFFWDtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7OzJDQUNXO0FBRWxCO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOztzQ0FDTTtBQUViO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt1Q0FDTztBQUVkO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzsyQ0FDVztBQUVsQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MkNBQ1c7QUFFbEI7SUFBQyxJQUFBLGdCQUFJLEdBQUU7O3FDQUNLO0FBRVo7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzswQ0FDVTtBQUVqQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7MENBQ1U7QUFFakI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxDQUFDOztvQ0FDRztBQUVaO0lBQUMsSUFBQSxnQkFBSSxHQUFFOzt5Q0FDUztBQUVoQjtJQUFDLElBQUEsZ0JBQUksR0FBRTs7NENBQ1k7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7OzBDQUNOO0FBRW5CO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO3NDQUNqQixJQUFJOzBDQUFDO0FBcEVSLE9BQU87SUFSbkIsSUFBQSx3QkFBWSxFQUFDO1FBQ1YsYUFBYSxFQUFFO1lBQ1gsVUFBVSxFQUFFLHlCQUFXLENBQUMsT0FBTztZQUMvQixVQUFVLEVBQUUsSUFBSTtTQUNuQjtLQUNKLENBQUM7R0FHVyxPQUFPLENBd0VuQjtBQXhFWSwwQkFBTztBQTBFUCxRQUFBLFlBQVksR0FBRyxJQUFBLDRCQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgSW5kZXgsIG1vZGVsT3B0aW9ucywgcHJvcCwgUmVmIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50L2NvbGxlY3Rpb25zXCI7XHJcblxyXG5AbW9kZWxPcHRpb25zKHtcclxuICAgIHNjaGVtYU9wdGlvbnM6IHtcclxuICAgICAgICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9ucy5WQUNBTkNZLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IHRydWVcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFjYW5jeSB7XHJcbiAgICBAcHJvcCgpXHJcbiAgICB1c2VySWQ6IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGRpcmVjdGlvbjogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoeyBkZWZhdWx0OiAnZmluZFdvcmsnIH0pXHJcbiAgICB0eXBlOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBhZ2U6IG51bWJlclxyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRlY2hub2xvZ3k6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHRnVXNlcm5hbWU6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHBob25lOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBwbGFjZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgcHJpY2U6IHN0cmluZ1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIG1pblN1bTogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWF4U3VtOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBwcm9mZXNzaW9uOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB0aW1lVG9DYWxsOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICBnb2FsOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCh7fSlcclxuICAgIG1zZzogc3RyaW5nO1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIHVzZXJNc2dJZDogbnVtYmVyXHJcblxyXG4gICAgQHByb3AoKVxyXG4gICAgbWVzc2FnZUlkOiBudW1iZXJcclxuXHJcbiAgICBAcHJvcCh7fSlcclxuICAgIGltZzogc3RyaW5nO1xyXG5cclxuICAgIEBwcm9wKClcclxuICAgIGhhc2h0ZWdzOiBzdHJpbmdcclxuXHJcbiAgICBAcHJvcCgpXHJcbiAgICB2YWNhbmN5VHlwZTogc3RyaW5nXHJcblxyXG4gICAgQHByb3AoeyBkZWZhdWx0OiBmYWxzZSB9KVxyXG4gICAgaXNEZWxldGVkOiBib29sZWFuO1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogdW5kZWZpbmVkIH0pXHJcbiAgICBkZWxldGVkQXQ/OiBEYXRlO1xyXG5cclxuICAgIGNyZWF0ZWRBdD86IERhdGU7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBWYWNhbmN5TW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKFZhY2FuY3kpO1xyXG4iXX0=