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
var MachineMasterComponent = /** @class */ (function () {
    function MachineMasterComponent() {
    }
    MachineMasterComponent.prototype.ngOnInit = function () {
    };
    MachineMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-machineMaster',
            templateUrl: './machine-master.component.html',
            styleUrls: [
                './machine-master.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MachineMasterComponent);
    return MachineMasterComponent;
}());
exports.MachineMasterComponent = MachineMasterComponent;
var RemoveMachineMasterDirective = /** @class */ (function () {
    function RemoveMachineMasterDirective(elements) {
        this.elements = elements;
    }
    RemoveMachineMasterDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.machineMaster_parent = (this.elements).nativeElement.parentElement;
        this.machineMaster_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveMachineMasterDirective.prototype, "onToggle", null);
    RemoveMachineMasterDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveMachineMaster]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveMachineMasterDirective);
    return RemoveMachineMasterDirective;
}());
exports.RemoveMachineMasterDirective = RemoveMachineMasterDirective;
//# sourceMappingURL=machine-master.component.js.map