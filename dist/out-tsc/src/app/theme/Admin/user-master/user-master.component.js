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
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var $ = require("jquery");
var forms_1 = require("@angular/forms");
var UserMaster_service_1 = require("../../../shared/services/UserMaster.service");
var models_1 = require("../../../shared/models");
var UserMasterComponent = /** @class */ (function () {
    function UserMasterComponent(UserMasterService, appRouter, toastr, route, fb) {
        this.UserMasterService = UserMasterService;
        this.appRouter = appRouter;
        this.toastr = toastr;
        this.route = route;
        this.fb = fb;
        this.usermaster = new models_1.UserMaster;
        // this.FormValid();
    }
    // FormValid() {
    //   this.angForm = this.fb.group({
    //     name: ['',
    //       [
    //         Validators.required,
    //         Validators.minLength(4),
    //         Validators.pattern('^[A-Za-z -]+$')
    //       ]
    //     ],
    //   });
    // }
    UserMasterComponent.prototype.ngOnInit = function () {
    };
    UserMasterComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.UserMasterService.create(this.usermaster)
            .then(function (result) {
            if (result) {
                _this.toastr.success('User added successfully');
                //this.loading = false;
                console.log('User added successfull');
            }
        })
            .catch(function (statusData) {
            $('#oppsend').prop('disabled', false);
            if (statusData === '409') {
            }
            if (statusData === '500') {
                _this.toastr.error('Internal server error!');
            }
        });
    };
    UserMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-userMaster',
            templateUrl: './user-master.component.html',
            styleUrls: [
                './user-master.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [UserMaster_service_1.UserMasterService,
            router_1.Router,
            ngx_toastr_1.ToastrService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], UserMasterComponent);
    return UserMasterComponent;
}());
exports.UserMasterComponent = UserMasterComponent;
var RemoveUserMasterDirective = /** @class */ (function () {
    function RemoveUserMasterDirective(elements) {
        this.elements = elements;
    }
    RemoveUserMasterDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.userMaster_parent = (this.elements).nativeElement.parentElement;
        this.userMaster_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveUserMasterDirective.prototype, "onToggle", null);
    RemoveUserMasterDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveUserMaster]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveUserMasterDirective);
    return RemoveUserMasterDirective;
}());
exports.RemoveUserMasterDirective = RemoveUserMasterDirective;
//# sourceMappingURL=user-master.component.js.map