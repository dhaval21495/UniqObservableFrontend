"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var role_menu_master_component_1 = require("./role-menu-master.component");
var routes = [
    {
        path: '',
        component: role_menu_master_component_1.RoleMenuMasterComponent,
        data: {
            title: 'Role Master',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Role Master',
            status: true
        }
    }
];
var RoleMenuMasterRoutingModule = /** @class */ (function () {
    function RoleMenuMasterRoutingModule() {
    }
    RoleMenuMasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], RoleMenuMasterRoutingModule);
    return RoleMenuMasterRoutingModule;
}());
exports.RoleMenuMasterRoutingModule = RoleMenuMasterRoutingModule;
//# sourceMappingURL=role-menu-master-routing.module.js.map