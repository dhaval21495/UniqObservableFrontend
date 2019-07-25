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
var section_master_component_1 = require("./section-master.component");
var routes = [
    {
        path: '',
        component: section_master_component_1.SectionMasterComponent,
        data: {
            title: 'Section Master',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Section Master',
            status: true
        }
    }
];
var SectionMasterRoutingModule = /** @class */ (function () {
    function SectionMasterRoutingModule() {
    }
    SectionMasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], SectionMasterRoutingModule);
    return SectionMasterRoutingModule;
}());
exports.SectionMasterRoutingModule = SectionMasterRoutingModule;
//# sourceMappingURL=section-master-routing.module.js.map