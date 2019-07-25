"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormData = /** @class */ (function () {
    function FormData() {
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());
exports.FormData = FormData;
var Personal = /** @class */ (function () {
    function Personal() {
    }
    return Personal;
}());
exports.Personal = Personal;
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=formData.model.js.map