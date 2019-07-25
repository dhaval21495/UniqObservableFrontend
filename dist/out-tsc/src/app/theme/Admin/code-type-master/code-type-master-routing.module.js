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
var code_type_master_component_1 = require("./code-type-master.component");
var routes = [
    {
        path: '',
        component: code_type_master_component_1.CodeTypeMasterComponent,
        data: {
            title: 'Code Type Master',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Code Type Master',
            status: true
        }
    }
];
var CodeTypeMasterRoutingModule = /** @class */ (function () {
    function CodeTypeMasterRoutingModule() {
    }
    CodeTypeMasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], CodeTypeMasterRoutingModule);
    return CodeTypeMasterRoutingModule;
}());
exports.CodeTypeMasterRoutingModule = CodeTypeMasterRoutingModule;
//# sourceMappingURL=code-type-master-routing.module.js.map