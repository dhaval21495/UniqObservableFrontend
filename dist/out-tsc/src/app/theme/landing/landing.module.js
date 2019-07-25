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
var landing_component_1 = require("./landing.component");
var landing_routing_module_1 = require("./landing-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var ngx_carousel_1 = require("ngx-carousel");
var ngx_scroll_to_1 = require("@nicky-lenaers/ngx-scroll-to");
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                landing_routing_module_1.LandingRoutingModule,
                shared_module_1.SharedModule,
                ngx_scroll_to_1.ScrollToModule.forRoot(),
                ngx_carousel_1.NgxCarouselModule
            ],
            declarations: [landing_component_1.LandingComponent]
        })
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;
//# sourceMappingURL=landing.module.js.map