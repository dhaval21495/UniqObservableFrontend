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
var section_master_component_1 = require("./section-master.component");
var section_master_routing_module_1 = require("./section-master-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var SectionMasterModule = /** @class */ (function () {
    function SectionMasterModule() {
    }
    SectionMasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                section_master_routing_module_1.SectionMasterRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                section_master_component_1.SectionMasterComponent,
                section_master_component_1.RemoveSectionMasterDirective
            ]
        })
    ], SectionMasterModule);
    return SectionMasterModule;
}());
exports.SectionMasterModule = SectionMasterModule;
//# sourceMappingURL=section-master.module.js.map