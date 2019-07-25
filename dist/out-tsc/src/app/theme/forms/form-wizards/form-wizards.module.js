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
var form_wizards_component_1 = require("./form-wizards.component");
var form_wizards_routing_module_1 = require("./form-wizards-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var dist_1 = require("ng2-archwizard/dist");
var wizard_basic_component_1 = require("./wizard-basic/wizard-basic.component");
var wizard_navbar_lg_component_1 = require("./wizard-navbar-lg/wizard-navbar-lg.component");
var wizard_navbar_lg_icon_component_1 = require("./wizard-navbar-lg-icon/wizard-navbar-lg-icon.component");
var wizard_custom_component_1 = require("./wizard-custom/wizard-custom.component");
var wizard_navbar_left_component_1 = require("./wizard-navbar-left/wizard-navbar-left.component");
var wizard_navbar_right_component_1 = require("./wizard-navbar-right/wizard-navbar-right.component");
var FormWizardsModule = /** @class */ (function () {
    function FormWizardsModule() {
    }
    FormWizardsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                form_wizards_routing_module_1.FormWizardsRoutingModule,
                shared_module_1.SharedModule,
                dist_1.ArchwizardModule
            ],
            declarations: [
                form_wizards_component_1.FormWizardsComponent,
                wizard_basic_component_1.WizardBasicComponent,
                wizard_navbar_lg_component_1.WizardNavbarLgComponent,
                wizard_navbar_lg_icon_component_1.WizardNavbarLgIconComponent,
                wizard_custom_component_1.WizardCustomComponent,
                wizard_navbar_left_component_1.WizardNavbarLeftComponent,
                wizard_navbar_right_component_1.WizardNavbarRightComponent
            ]
        })
    ], FormWizardsModule);
    return FormWizardsModule;
}());
exports.FormWizardsModule = FormWizardsModule;
//# sourceMappingURL=form-wizards.module.js.map