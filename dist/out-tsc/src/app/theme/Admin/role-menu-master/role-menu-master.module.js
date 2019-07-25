"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var role_menu_master_component_1 = require("./role-menu-master.component");
var role_menu_master_routing_module_1 = require("./role-menu-master-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var RoleMenuMasterModule = /** @class */ (function () {
    function RoleMenuMasterModule() {
    }
    RoleMenuMasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                role_menu_master_routing_module_1.RoleMenuMasterRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                role_menu_master_component_1.RoleMenuMasterComponent,
                role_menu_master_component_1.RemoveRoleMenuMasterDirective
            ]
        })
    ], RoleMenuMasterModule);
    return RoleMenuMasterModule;
}());
exports.RoleMenuMasterModule = RoleMenuMasterModule;
//# sourceMappingURL=role-menu-master.module.js.map