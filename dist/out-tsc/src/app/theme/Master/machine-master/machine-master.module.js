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
var machine_master_component_1 = require("./machine-master.component");
var machine_master_routing_module_1 = require("./machine-master-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var MachineMasterModule = /** @class */ (function () {
    function MachineMasterModule() {
    }
    MachineMasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                machine_master_routing_module_1.MachineMasterRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                machine_master_component_1.MachineMasterComponent,
                machine_master_component_1.RemoveMachineMasterDirective
            ]
        })
    ], MachineMasterModule);
    return MachineMasterModule;
}());
exports.MachineMasterModule = MachineMasterModule;
//# sourceMappingURL=machine-master.module.js.map