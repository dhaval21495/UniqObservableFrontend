import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MachineMasterComponent, RemoveMachineMasterDirective} from './machine-master.component';
import {MachineMasterRoutingModule} from './machine-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MachineMasterRoutingModule,
    SharedModule
  ],
  declarations: [
    MachineMasterComponent,
    RemoveMachineMasterDirective
  ]
})
export class MachineMasterModule { }
