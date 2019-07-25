import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PositionMasterComponent, RemovePositionMasterDirective} from './position-master.component';
import {PositionMasterRoutingModule} from './position-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PositionMasterRoutingModule,
    SharedModule
  ],
  declarations: [
    PositionMasterComponent,
    RemovePositionMasterDirective
  ]
})
export class PositionMasterModule { }
