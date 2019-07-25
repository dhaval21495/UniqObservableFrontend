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
var forms_1 = require("@angular/forms");
var user_profile_component_1 = require("./user-profile.component");
var user_profile_routing_module_1 = require("./user-profile-routing.module");
var shared_module_1 = require("../../../shared/shared.module");
var index_1 = require("ngx-quill-editor/index");
var angular2_datatable_1 = require("angular2-datatable");
var http_1 = require("@angular/http");
var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                user_profile_routing_module_1.UserProfileRoutingModule,
                shared_module_1.SharedModule,
                index_1.QuillEditorModule,
                http_1.HttpModule,
                angular2_datatable_1.DataTableModule,
            ],
            declarations: [user_profile_component_1.UserProfileComponent]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());
exports.UserProfileModule = UserProfileModule;
//# sourceMappingURL=user-profile.module.js.map