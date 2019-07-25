"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.openMe = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: false
            },
            load: 2,
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
        this.carouselClients = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: false
            },
            loop: true,
            touch: true,
            easing: 'ease',
            animation: 'lazy'
        };
    };
    LandingComponent.prototype.afterCarouselViewedFn = function (data) {
        // console.log(data);
    };
    LandingComponent.prototype.onmoveFn = function (data) {
        // console.log(data);
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: [
                './landing.component.scss',
                '../../../assets/landing/css/style.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map