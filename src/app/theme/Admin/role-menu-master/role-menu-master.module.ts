import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoleMenuMasterComponent, RemoveRoleMenuMasterDirective} from './role-menu-master.component';
import {RoleMenuMasterRoutingModule} from './role-menu-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RoleMenuMasterRoutingModule,
    SharedModule
  ],
  declarations: [
    RoleMenuMasterComponent,
    RemoveRoleMenuMasterDirective
  ]
})
export class RoleMenuMasterModule { }
