import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeTypeMasterComponent, RemoveCodeTypeMasterDirective} from './code-type-master.component';
import {CodeTypeMasterRoutingModule} from './code-type-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CodeTypeMasterRoutingModule,
    SharedModule,
    UiSwitchModule,
    TagInputModule,
    FormsModule
  ],
  declarations: [
    CodeTypeMasterComponent,
    RemoveCodeTypeMasterDirective
  ]
})
export class CodeTypeMasterModule { }
