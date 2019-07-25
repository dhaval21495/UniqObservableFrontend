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
var CompanyMaster_service_1 = require("../../../shared/services/CompanyMaster.service");
var models_1 = require("../../../shared/models");
var CompanyNameComponent = /** @class */ (function () {
    //loading = false;
    function CompanyNameComponent(CompanyMasterService, appRouter, toastr, route, fb) {
        this.CompanyMasterService = CompanyMasterService;
        this.appRouter = appRouter;
        this.toastr = toastr;
        this.route = route;
        this.fb = fb;
        //public maskUsMobile = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/,];
        this.companymaster = new models_1.CompanyMaster;
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
    CompanyNameComponent.prototype.ngOnInit = function () {
    };
    CompanyNameComponent.prototype.onFormSubmit = function (form) {
        // let neww = {
        //   Comp_Code: 151511,
        //   Comp_Name : "first data",
        //   Owner_Name : "Vl",
        //   Address:"maru ghar",
        //   City:"surat",
        //   State:"gujarat",
        //   Country:"india",
        //   Comp_Email:"dhaval@gmail.com",
        //   Comp_Mobile_No:4865486,
        //   Landline_No:4856284,
        //   Web_Url:"dhaval.com",
        //   Date_Of_Reg:"21-04-1995",
        //   License_No:485584,
        //   Buss_Type:"Buss_Type",
        //   Buss_Nature:"Buss_Nature",
        //   Remark:"Remark",
        //   Active_YN:"Active_YN"
        //   }
        var _this = this;
        this.CompanyMasterService.create(this.companymaster)
            .then(function (result) {
            if (result) {
                _this.toastr.success('Company master added successfully');
                //this.loading = false;
                console.log('Company master added successfull');
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
    CompanyNameComponent = __decorate([
        core_1.Component({
            selector: 'app-companyName',
            templateUrl: './company-name.component.html',
            styleUrls: [
                './company-name.component.scss',
                '../../../../scss/common.scss',
                '../../../../assets/icon/icofont/css/icofont.scss'
            ]
        }),
        __metadata("design:paramtypes", [CompanyMaster_service_1.CompanyMasterService,
            router_1.Router,
            ngx_toastr_1.ToastrService,
            router_1.ActivatedRoute,
            forms_1.FormBuilder])
    ], CompanyNameComponent);
    return CompanyNameComponent;
}());
exports.CompanyNameComponent = CompanyNameComponent;
var RemoveCompanyNameDirective = /** @class */ (function () {
    function RemoveCompanyNameDirective(elements) {
        this.elements = elements;
    }
    RemoveCompanyNameDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.companyName_parent = (this.elements).nativeElement.parentElement;
        this.companyName_parent.remove();
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RemoveCompanyNameDirective.prototype, "onToggle", null);
    RemoveCompanyNameDirective = __decorate([
        core_1.Directive({
            selector: '[appRemoveCompanyName]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], RemoveCompanyNameDirective);
    return RemoveCompanyNameDirective;
}());
exports.RemoveCompanyNameDirective = RemoveCompanyNameDirective;
//# sourceMappingURL=company-name.component.js.map