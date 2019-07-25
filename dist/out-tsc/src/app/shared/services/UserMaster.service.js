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
var UserMasterService = /** @class */ (function () {
    function UserMasterService(http, httpClient
    // private authenticationService: AuthenticationService
    ) {
        this.http = http;
        this.httpClient = httpClient;
    }
    UserMasterService.prototype.create = function (UserMaster) {
        console.log(UserMaster);
        return this.http
            .post('/UserMaster/addUserMaster', UserMaster)
            .toPromise()
            .catch(this.handleError);
    };
    UserMasterService.prototype.update = function (id, UserMaster) {
        // CompanyMaster['id'] = id;
        return this.http.put('UserMaster/' + id, UserMaster)
            .toPromise()
            .catch(this.handleError);
    };
    UserMasterService.prototype.handleError = function (error) {
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
    UserMasterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            http_2.HttpClient
            // private authenticationService: AuthenticationService
        ])
    ], UserMasterService);
    return UserMasterService;
}());
exports.UserMasterService = UserMasterService;
//# sourceMappingURL=UserMaster.service.js.map