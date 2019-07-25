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
var CodeMasterComponent = /** @class */ (function () {
    function CodeMasterComponent() {
    }
    CodeMasterComponent.prototype.ngOnInit = function () {
    };
    CodeMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-codeMaster',
            templateUrl: './code-master.component.html',
            styleUrls: [
                './code-master.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CodeMasterComponent);
    return CodeMasterComponent;
}());
exports.CodeMasterComponent = CodeMasterComponent;
var RemoveCodeMasterDirective = /** @class */ (function () {
    function RemoveCodeMasterDirective(elements) {
        this.elements = elements;
    }
    RemoveCodeMasterDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.codeMaster_parent = (this.elements).nativeElement.parentElement;
        this.codeMaster_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveCodeMasterDirective.prototype, "onToggle", null);
    RemoveCodeMasterDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveCodeMaster]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveCodeMasterDirective);
    return RemoveCodeMasterDirective;
}());
exports.RemoveCodeMasterDirective = RemoveCodeMasterDirective;
//# sourceMappingURL=code-master.component.js.map