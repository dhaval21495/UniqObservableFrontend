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
var form_picker_component_1 = require("./form-picker.component");
var form_picker_routing_module_1 = require("./form-picker-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var forms_1 = require("@angular/forms");
var ngx_color_picker_1 = require("ngx-color-picker");
var FormPickerModule = /** @class */ (function () {
    function FormPickerModule() {
    }
    FormPickerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                form_picker_routing_module_1.FormPickerRoutingModule,
                shared_module_1.SharedModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_color_picker_1.ColorPickerModule
            ],
            declarations: [form_picker_component_1.FormPickerComponent]
        })
    ], FormPickerModule);
    return FormPickerModule;
}());
exports.FormPickerModule = FormPickerModule;
//# sourceMappingURL=form-picker.module.js.map