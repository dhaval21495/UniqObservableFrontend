import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserMasterComponent, RemoveUserMasterDirective} from './user-master.component';
import {UserMasterRoutingModule} from './user-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserMasterRoutingModule,
    SharedModule,
    UiSwitchModule,
    TagInputModule,
    FormsModule
  ],
  declarations: [
    UserMasterComponent,
    RemoveUserMasterDirective
  ]
})
export class UserMasterModule { }
