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
var code_type_master_component_1 = require("./code-type-master.component");
var code_type_master_routing_module_1 = require("./code-type-master-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var CodeTypeMasterModule = /** @class */ (function () {
    function CodeTypeMasterModule() {
    }
    CodeTypeMasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                code_type_master_routing_module_1.CodeTypeMasterRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                code_type_master_component_1.CodeTypeMasterComponent,
                code_type_master_component_1.RemoveCodeTypeMasterDirective
            ]
        })
    ], CodeTypeMasterModule);
    return CodeTypeMasterModule;
}());
exports.CodeTypeMasterModule = CodeTypeMasterModule;
//# sourceMappingURL=code-type-master.module.js.map