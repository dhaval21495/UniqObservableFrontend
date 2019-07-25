"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var wizard_navbar_left_component_1 = require("./wizard-navbar-left.component");
describe('WizardNavbarLeftComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [wizard_navbar_left_component_1.WizardNavbarLeftComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(wizard_navbar_left_component_1.WizardNavbarLeftComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wizard-navbar-left.component.spec.js.map