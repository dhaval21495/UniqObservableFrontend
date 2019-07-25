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
var formData_model_1 = require("./formData.model");
var workflow_service_1 = require("../workflow/workflow.service");
var workflow_model_1 = require("../workflow/workflow.model");
var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new formData_model_1.FormData();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.workflowService.validateStep(workflow_model_1.STEPS.personal);
    };
    FormDataService.prototype.getWork = function () {
        return this.formData.work;
    };
    FormDataService.prototype.setWork = function (data) {
        this.isWorkFormValid = true;
        this.formData.work = data;
        this.workflowService.validateStep(workflow_model_1.STEPS.work);
    };
    FormDataService.prototype.getAddress = function () {
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.workflowService.validateStep(workflow_model_1.STEPS.address);
    };
    FormDataService.prototype.getFormData = function () {
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        return this.isPersonalFormValid && this.isWorkFormValid && this.isAddressFormValid;
    };
    FormDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [workflow_service_1.WorkflowService])
    ], FormDataService);
    return FormDataService;
}());
exports.FormDataService = FormDataService;
//# sourceMappingURL=formData.service.js.map