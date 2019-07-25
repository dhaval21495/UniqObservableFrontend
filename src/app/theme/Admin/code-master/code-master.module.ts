import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeMasterComponent, RemoveCodeMasterDirective} from './code-master.component';
import {CodeMasterRoutingModule} from './code-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CodeMasterRoutingModule,
    SharedModule
  ],
  declarations: [
    CodeMasterComponent,
    RemoveCodeMasterDirective
  ]
})
export class CodeMasterModule { }
