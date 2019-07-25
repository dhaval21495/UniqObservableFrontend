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
var user_master_component_1 = require("./user-master.component");
var user_master_routing_module_1 = require("./user-master-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var ng2_ui_switch_1 = require("ng2-ui-switch");
var ngx_chips_1 = require("ngx-chips");
var forms_1 = require("@angular/forms");
var UserMasterModule = /** @class */ (function () {
    function UserMasterModule() {
    }
    UserMasterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                user_master_routing_module_1.UserMasterRoutingModule,
                shared_module_1.SharedModule,
                ng2_ui_switch_1.UiSwitchModule,
                ngx_chips_1.TagInputModule,
                forms_1.FormsModule
            ],
            declarations: [
                user_master_component_1.UserMasterComponent,
                user_master_component_1.RemoveUserMasterDirective
            ]
        })
    ], UserMasterModule);
    return UserMasterModule;
}());
exports.UserMasterModule = UserMasterModule;
//# sourceMappingURL=user-master.module.js.map