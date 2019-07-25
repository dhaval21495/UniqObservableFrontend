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
var PositionMasterComponent = /** @class */ (function () {
    //public maskUsMobile = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,];
    function PositionMasterComponent() {
    }
    PositionMasterComponent.prototype.ngOnInit = function () {
    };
    PositionMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-positionMaster',
            templateUrl: './position-master.component.html',
            styleUrls: [
                './position-master.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PositionMasterComponent);
    return PositionMasterComponent;
}());
exports.PositionMasterComponent = PositionMasterComponent;
var RemovePositionMasterDirective = /** @class */ (function () {
    function RemovePositionMasterDirective(elements) {
        this.elements = elements;
    }
    RemovePositionMasterDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.positionMaster_parent = (this.elements).nativeElement.parentElement;
        this.positionMaster_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemovePositionMasterDirective.prototype, "onToggle", null);
    RemovePositionMasterDirective = __decorate([
        core_1.Directive({
            selector: '[appRemovePositionMaster]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemovePositionMasterDirective);
    return RemovePositionMasterDirective;
}());
exports.RemovePositionMasterDirective = RemovePositionMasterDirective;
//# sourceMappingURL=position-master.component.js.map