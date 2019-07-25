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
var form_wizards_component_1 = require("./form-wizards.component");
var routes = [
    {
        path: '',
        component: form_wizards_component_1.FormWizardsComponent,
        data: {
            title: 'Forms Wizard',
            icon: 'icon-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form wizard',
            status: true
        }
    }
];
var FormWizardsRoutingModule = /** @class */ (function () {
    function FormWizardsRoutingModule() {
    }
    FormWizardsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FormWizardsRoutingModule);
    return FormWizardsRoutingModule;
}());
exports.FormWizardsRoutingModule = FormWizardsRoutingModule;
//# sourceMappingURL=form-wizards-routing.module.js.map