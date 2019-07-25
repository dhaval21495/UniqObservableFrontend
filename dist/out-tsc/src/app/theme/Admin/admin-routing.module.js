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
var routes = [
    {
        path: '',
        data: {
            title: 'Admin',
            status: true
        },
        children: [
            {
                path: 'company-name',
                loadChildren: './company-name/company-name.module#CompanyNameModule'
            },
            {
                path: 'user-master',
                loadChildren: './user-master/user-master.module#UserMasterModule'
            },
            {
                path: 'menu-master',
                loadChildren: './menu-master/menu-master.module#MenuMasterModule'
            },
            {
                path: 'role-menu-master',
                loadChildren: './role-menu-master/role-menu-master.module#RoleMenuMasterModule'
            },
            {
                path: 'code-type-master',
                loadChildren: './code-type-master/code-type-master.module#CodeTypeMasterModule'
            },
            {
                path: 'code-master',
                loadChildren: './code-master/code-master.module#CodeMasterModule'
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin-routing.module.js.map