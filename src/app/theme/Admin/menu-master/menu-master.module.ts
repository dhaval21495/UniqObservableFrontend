import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuMasterComponent, RemoveMenuMasterDirective} from './menu-master.component';
import {MenuMasterRoutingModule} from './menu-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MenuMasterRoutingModule,
    SharedModule,
    UiSwitchModule,
    TagInputModule,
    FormsModule
  ],
  declarations: [
    MenuMasterComponent,
    RemoveMenuMasterDirective
  ]
})
export class MenuMasterModule { }
