"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var wizard_navbar_right_component_1 = require("./wizard-navbar-right.component");
describe('WizardNavbarRightComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [wizard_navbar_right_component_1.WizardNavbarRightComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(wizard_navbar_right_component_1.WizardNavbarRightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wizard-navbar-right.component.spec.js.map