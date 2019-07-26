import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MenuItems} from './shared/menu-items/menu-items';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import { LocationStrategy,  HashLocationStrategy } from '@angular/common';
import { CompanyMasterService } from '../app/shared/services/CompanyMaster.service';
import { UserMasterService } from '../app/shared/services/UserMaster.service';
import { MenuMasterService } from '../app/shared/services/MenuMaster.service';
import { CodeTypeMasterService } from '../app/shared/services/CodeTypeMaster.service';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent
  ],
  imports: [
    // NgModule,
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
      }
    ), // ToastrModule added
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {provide:LocationStrategy, useClass: HashLocationStrategy},
    MenuItems, CompanyMasterService, UserMasterService, MenuMasterService,CodeTypeMasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
