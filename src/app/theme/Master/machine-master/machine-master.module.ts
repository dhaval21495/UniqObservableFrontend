import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MachineMasterComponent, RemoveMachineMasterDirective} from './machine-master.component';
import {MachineMasterRoutingModule} from './machine-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MachineMasterRoutingModule,
    SharedModule,
    UiSwitchModule,
    TagInputModule,
    FormsModule
  ],
  declarations: [
    MachineMasterComponent,
    RemoveMachineMasterDirective
  ]
})
export class MachineMasterModule { }
