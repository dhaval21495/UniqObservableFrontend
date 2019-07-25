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
// import { AuthenticationService } from './authentication.service';
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var http_2 = require("@angular/common/http");
var CompanyMasterService = /** @class */ (function () {
    function CompanyMasterService(http, httpClient
    // private authenticationService: AuthenticationService
    ) {
        this.http = http;
        this.httpClient = httpClient;
    }
    CompanyMasterService.prototype.create = function (CompanyMaster) {
        console.log(CompanyMaster);
        return this.http
            .post('/companymaster/addCompanyMaster', CompanyMaster)
            .toPromise()
            .catch(this.handleError);
    };
    CompanyMasterService.prototype.update = function (id, CompanyMaster) {
        // CompanyMaster['id'] = id;
        return this.http.put('CompanyMaster/' + id, CompanyMaster)
            .toPromise()
            .catch(this.handleError);
    };
    CompanyMasterService.prototype.handleError = function (error) {
        if (error.status === 409) {
            return Promise.reject("409");
        }
        if (error.status === 500) {
            return Promise.reject("500");
        }
        if (error.status === 404) {
            return Promise.reject("404");
        }
        if (error.status === 406) {
            return Promise.reject("406");
        }
    };
    CompanyMasterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            http_2.HttpClient
            // private authenticationService: AuthenticationService
        ])
    ], CompanyMasterService);
    return CompanyMasterService;
}());
exports.CompanyMasterService = CompanyMasterService;
//# sourceMappingURL=CompanyMaster.service.js.map