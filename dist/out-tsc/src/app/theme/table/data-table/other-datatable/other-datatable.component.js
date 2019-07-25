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
var http_1 = require("@angular/http");
var OtherDatatableComponent = /** @class */ (function () {
    function OtherDatatableComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
    }
    OtherDatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/data/data.json")
            .subscribe(function (data) {
            _this.data = data.json();
        });
    };
    OtherDatatableComponent = __decorate([
        core_1.Component({
            selector: 'app-other-datatable',
            templateUrl: './other-datatable.component.html',
            styleUrls: [
                './other-datatable.component.scss',
                '../../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], OtherDatatableComponent);
    return OtherDatatableComponent;
}());
exports.OtherDatatableComponent = OtherDatatableComponent;
//# sourceMappingURL=other-datatable.component.js.map