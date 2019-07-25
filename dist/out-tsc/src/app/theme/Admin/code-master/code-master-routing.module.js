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
var code_master_component_1 = require("./code-master.component");
var routes = [
    {
        path: '',
        component: code_master_component_1.CodeMasterComponent,
        data: {
            title: 'Code Master',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Code Master',
            status: true
        }
    }
];
var CodeMasterRoutingModule = /** @class */ (function () {
    function CodeMasterRoutingModule() {
    }
    CodeMasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], CodeMasterRoutingModule);
    return CodeMasterRoutingModule;
}());
exports.CodeMasterRoutingModule = CodeMasterRoutingModule;
//# sourceMappingURL=code-master-routing.module.js.map