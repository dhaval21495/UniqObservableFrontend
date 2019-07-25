"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MergeSettingComponent = /** @class */ (function () {
    function MergeSettingComponent() {
    }
    MergeSettingComponent.prototype.ngOnInit = function () {
    };
    MergeSettingComponent = __decorate([
        core_1.Component({
            selector: 'app-mergeSetting',
            templateUrl: './merge-setting.component.html',
            styleUrls: [
                './merge-setting.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MergeSettingComponent);
    return MergeSettingComponent;
}());
exports.MergeSettingComponent = MergeSettingComponent;
var RemoveMergeSettingDirective = /** @class */ (function () {
    function RemoveMergeSettingDirective(elements) {
        this.elements = elements;
    }
    RemoveMergeSettingDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.mergeSetting_parent = (this.elements).nativeElement.parentElement;
        this.mergeSetting_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveMergeSettingDirective.prototype, "onToggle", null);
    RemoveMergeSettingDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveMergeSetting]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveMergeSettingDirective);
    return RemoveMergeSettingDirective;
}());
exports.RemoveMergeSettingDirective = RemoveMergeSettingDirective;
//# sourceMappingURL=merge-setting.component.js.map