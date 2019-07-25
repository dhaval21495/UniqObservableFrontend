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
var company_name_component_1 = require("./company-name.component");
var company_name_routing_module_1 = require("./company-name-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var ng2_ui_switch_1 = require("ng2-ui-switch");
var ngx_chips_1 = require("ngx-chips");
var forms_1 = require("@angular/forms");
var CompanyNameModule = /** @class */ (function () {
    function CompanyNameModule() {
    }
    CompanyNameModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                company_name_routing_module_1.CompanyNameRoutingModule,
                shared_module_1.SharedModule,
                ng2_ui_switch_1.UiSwitchModule,
                ngx_chips_1.TagInputModule,
                forms_1.FormsModule
            ],
            declarations: [
                company_name_component_1.CompanyNameComponent,
                company_name_component_1.RemoveCompanyNameDirective
            ]
        })
    ], CompanyNameModule);
    return CompanyNameModule;
}());
exports.CompanyNameModule = CompanyNameModule;
//# sourceMappingURL=company-name.module.js.map