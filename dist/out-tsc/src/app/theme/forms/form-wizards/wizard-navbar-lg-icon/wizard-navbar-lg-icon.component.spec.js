"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var wizard_navbar_lg_icon_component_1 = require("./wizard-navbar-lg-icon.component");
describe('WizardNavbarLgIconComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [wizard_navbar_lg_icon_component_1.WizardNavbarLgIconComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(wizard_navbar_lg_icon_component_1.WizardNavbarLgIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wizard-navbar-lg-icon.component.spec.js.map