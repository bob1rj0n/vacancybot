"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacancySendModel = exports.VacancySend = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
const collections_1 = require("../../constant/collections");
let VacancySend = class VacancySend {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], VacancySend.prototype, "msg", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], VacancySend.prototype, "img", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], VacancySend.prototype, "chatId", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], VacancySend.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ default: undefined }),
    tslib_1.__metadata("design:type", Date)
], VacancySend.prototype, "deletedAt", void 0);
VacancySend = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            collection: collections_1.Collections.VACANCY_SEND
        }
    })
], VacancySend);
exports.VacancySend = VacancySend;
exports.VacancySendModel = (0, typegoose_1.getModelForClass)(VacancySend);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjYW5jeS5zZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbW1vbi9kYi9tb2RlbC92YWNhbmN5LnNlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG9EQUF3RjtBQUN4Riw0REFBeUQ7QUFTbEQsSUFBTSxXQUFXLEdBQWpCLE1BQU0sV0FBVztDQWtCdkIsQ0FBQTtBQWpCRztJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ2I7QUFFWjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ2I7QUFFWjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQ1Y7QUFFZjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OENBQ047QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7c0NBQ2pCLElBQUk7OENBQUM7QUFkUixXQUFXO0lBUHZCLElBQUEsd0JBQVksRUFBQztRQUNWLGFBQWEsRUFBRTtZQUNYLFVBQVUsRUFBRSx5QkFBVyxDQUFDLFlBQVk7U0FDdkM7S0FDSixDQUFDO0dBR1csV0FBVyxDQWtCdkI7QUFsQlksa0NBQVc7QUFvQlgsUUFBQSxnQkFBZ0IsR0FBRyxJQUFBLDRCQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGdldE1vZGVsRm9yQ2xhc3MsIEluZGV4LCBtb2RlbE9wdGlvbnMsIHByb3AsIFJlZiB9IGZyb20gXCJAdHlwZWdvb3NlL3R5cGVnb29zZVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25zdGFudC9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQG1vZGVsT3B0aW9ucyh7XHJcbiAgICBzY2hlbWFPcHRpb25zOiB7XHJcbiAgICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbnMuVkFDQU5DWV9TRU5EXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhY2FuY3lTZW5kIHtcclxuICAgIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUgfSlcclxuICAgIG1zZzogc3RyaW5nO1xyXG5cclxuICAgIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUgfSlcclxuICAgIGltZzogc3RyaW5nO1xyXG5cclxuICAgIEBwcm9wKHsgcmVxdWlyZWQ6IHRydWUgfSlcclxuICAgIGNoYXRJZDogbnVtYmVyO1xyXG5cclxuICAgIEBwcm9wKHsgZGVmYXVsdDogZmFsc2UgfSlcclxuICAgIGlzRGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBAcHJvcCh7IGRlZmF1bHQ6IHVuZGVmaW5lZCB9KVxyXG4gICAgZGVsZXRlZEF0PzogRGF0ZTtcclxuXHJcbiAgICBjcmVhdGVkQXQ/OiBEYXRlO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVmFjYW5jeVNlbmRNb2RlbCA9IGdldE1vZGVsRm9yQ2xhc3MoVmFjYW5jeVNlbmQpO1xyXG4iXX0=