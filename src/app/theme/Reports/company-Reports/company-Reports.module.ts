import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyReportsComponent, RemoveCompanyReportsDirective} from './company-Reports.component';
import {CompanyReportsRoutingModule} from './company-Reports-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyReportsRoutingModule,
    SharedModule
  ],
  declarations: [
    CompanyReportsComponent,
    RemoveCompanyReportsDirective
  ]
})
export class CompanyReportsModule { }
