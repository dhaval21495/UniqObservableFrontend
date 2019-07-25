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
var RoleMenuMasterComponent = /** @class */ (function () {
    function RoleMenuMasterComponent() {
    }
    RoleMenuMasterComponent.prototype.ngOnInit = function () {
    };
    RoleMenuMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-roleMenuMaster',
            templateUrl: './role-menu-master.component.html',
            styleUrls: [
                './role-menu-master.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RoleMenuMasterComponent);
    return RoleMenuMasterComponent;
}());
exports.RoleMenuMasterComponent = RoleMenuMasterComponent;
var RemoveRoleMenuMasterDirective = /** @class */ (function () {
    function RemoveRoleMenuMasterDirective(elements) {
        this.elements = elements;
    }
    RemoveRoleMenuMasterDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.roleMenuMaster_parent = (this.elements).nativeElement.parentElement;
        this.roleMenuMaster_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveRoleMenuMasterDirective.prototype, "onToggle", null);
    RemoveRoleMenuMasterDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveRoleMaster]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveRoleMenuMasterDirective);
    return RemoveRoleMenuMasterDirective;
}());
exports.RemoveRoleMenuMasterDirective = RemoveRoleMenuMasterDirective;
//# sourceMappingURL=role-menu-master.component.js.map