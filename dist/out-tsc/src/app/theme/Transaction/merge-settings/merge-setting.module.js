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
var merge_setting_component_1 = require("./merge-setting.component");
var merge_setting_routing_module_1 = require("./merge-setting-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var MergeSettingModule = /** @class */ (function () {
    function MergeSettingModule() {
    }
    MergeSettingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                merge_setting_routing_module_1.MergeSettingRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                merge_setting_component_1.MergeSettingComponent,
                merge_setting_component_1.RemoveMergeSettingDirective
            ]
        })
    ], MergeSettingModule);
    return MergeSettingModule;
}());
exports.MergeSettingModule = MergeSettingModule;
//# sourceMappingURL=merge-setting.module.js.map