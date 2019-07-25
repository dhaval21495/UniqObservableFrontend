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
var admin_component_1 = require("./layout/admin/admin.component");
var auth_component_1 = require("./layout/auth/auth.component");
var routes = [
    {
        path: '',
        component: auth_component_1.AuthComponent,
        children: [
            {
                path: 'auth',
                loadChildren: './theme/auth/auth.module#AuthModule'
            },
            {
                path: '',
                loadChildren: './theme/auth/login/basic-login/basic-login.module#BasicLoginModule'
            }
        ]
    },
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard/default',
                //redirectTo: 'dashboard/project',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'Admin',
                loadChildren: './theme/Admin/admin.module#AdminModule'
            },
            {
                path: 'Master',
                loadChildren: './theme/Master/master.module#MasterModule'
            },
            {
                path: 'Transaction',
                loadChildren: './theme/Transaction/transaction.module#TransactionModule'
            },
            {
                path: 'Report',
                loadChildren: './theme/Reports/Reports.module#ReportsModule'
            },
            {
                path: 'landing',
                loadChildren: './theme/landing/landing.module#LandingModule'
            },
            {
                path: 'bootstrap-table',
                loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
            },
            {
                path: 'data-table',
                loadChildren: './theme/table/data-table/data-table.module#DataTableModule'
            },
            {
                path: 'user',
                loadChildren: './theme/user/user.module#UserModule'
            },
            {
                path: 'simple-page',
                loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map