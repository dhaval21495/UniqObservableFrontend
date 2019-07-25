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
var textMaskAddons_1 = require("text-mask-addons/dist/textMaskAddons");
var FormMaskComponent = /** @class */ (function () {
    function FormMaskComponent() {
        this.maskUsMobile = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskUsMobileCountryCode = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskDateAuto = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskZipCode = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.maskDatePipe = textMaskAddons_1.createAutoCorrectedDatePipe('dd/mm/yyyy');
        this.maskUsAmount = textMaskAddons_1.createNumberMask({
            prefix: '$'
        });
        this.maskUsAmountDecimal = textMaskAddons_1.createNumberMask({
            prefix: '',
            suffix: ' $',
            allowDecimal: true
        });
        this.maskPercentage = textMaskAddons_1.createNumberMask({
            prefix: '',
            suffix: ' %',
            integerLimit: 2
        });
        this.emailMask = textMaskAddons_1.emailMask;
    }
    FormMaskComponent.prototype.ngOnInit = function () {
    };
    FormMaskComponent = __decorate([
        core_1.Component({
            selector: 'app-form-mask',
            templateUrl: './form-mask.component.html',
            styleUrls: ['./form-mask.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FormMaskComponent);
    return FormMaskComponent;
}());
exports.FormMaskComponent = FormMaskComponent;
//# sourceMappingURL=form-mask.component.js.map