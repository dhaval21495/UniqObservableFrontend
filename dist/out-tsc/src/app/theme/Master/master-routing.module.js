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
            title: 'Master',
            status: true
        },
        children: [
            {
                path: 'machine-master',
                loadChildren: './machine-master/machine-master.module#MachineMasterModule'
            },
            {
                path: 'section-master',
                loadChildren: './section-master/section-master.module#SectionMasterModule'
            },
            {
                path: 'position-master',
                loadChildren: './position-master/position-master.module#PositionMasterModule'
            },
            {
                path: 'machine-mapping',
                loadChildren: './machine-mapping/machine-mapping.module#MachineMappingModule'
            }
        ]
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());
exports.MasterRoutingModule = MasterRoutingModule;
//# sourceMappingURL=master-routing.module.js.map