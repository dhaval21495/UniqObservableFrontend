import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyNameComponent, RemoveCompanyNameDirective} from './company-name.component';
import {CompanyNameRoutingModule} from './company-name-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
@NgModule({
  imports: [
    CommonModule,
    CompanyNameRoutingModule,
    SharedModule,
    UiSwitchModule,
    TagInputModule,
    FormsModule,
    ColorPickerModule
  ],
  declarations: [
    CompanyNameComponent,
    RemoveCompanyNameDirective
  ]
})
export class CompanyNameModule { }
