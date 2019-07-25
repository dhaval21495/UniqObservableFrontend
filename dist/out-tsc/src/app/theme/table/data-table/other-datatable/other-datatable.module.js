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
var other_datatable_routing_module_1 = require("./other-datatable-routing.module");
var other_datatable_component_1 = require("./other-datatable.component");
var angular2_datatable_1 = require("angular2-datatable");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var shared_module_1 = require("../../../../shared/shared.module");
var OtherDatatableModule = /** @class */ (function () {
    function OtherDatatableModule() {
    }
    OtherDatatableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                other_datatable_routing_module_1.OtherDatatableRoutingModule,
                shared_module_1.SharedModule,
                http_1.HttpModule,
                angular2_datatable_1.DataTableModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [other_datatable_component_1.OtherDatatableComponent]
        })
    ], OtherDatatableModule);
    return OtherDatatableModule;
}());
exports.OtherDatatableModule = OtherDatatableModule;
//# sourceMappingURL=other-datatable.module.js.map