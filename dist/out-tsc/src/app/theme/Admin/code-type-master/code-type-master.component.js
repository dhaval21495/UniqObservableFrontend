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
var CodeTypeMasterComponent = /** @class */ (function () {
    function CodeTypeMasterComponent() {
    }
    CodeTypeMasterComponent.prototype.ngOnInit = function () {
    };
    CodeTypeMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-codeTypeMaster',
            templateUrl: './code-type-master.component.html',
            styleUrls: [
                './code-type-master.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CodeTypeMasterComponent);
    return CodeTypeMasterComponent;
}());
exports.CodeTypeMasterComponent = CodeTypeMasterComponent;
var RemoveCodeTypeMasterDirective = /** @class */ (function () {
    function RemoveCodeTypeMasterDirective(elements) {
        this.elements = elements;
    }
    RemoveCodeTypeMasterDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.codeTypeMaster_parent = (this.elements).nativeElement.parentElement;
        this.codeTypeMaster_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveCodeTypeMasterDirective.prototype, "onToggle", null);
    RemoveCodeTypeMasterDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveCodeTypeMaster]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveCodeTypeMasterDirective);
    return RemoveCodeTypeMasterDirective;
}());
exports.RemoveCodeTypeMasterDirective = RemoveCodeTypeMasterDirective;
//# sourceMappingURL=code-type-master.component.js.map