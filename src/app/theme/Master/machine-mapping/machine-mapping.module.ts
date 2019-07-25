import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MachineMappingComponent, RemoveMachineMappingDirective} from './machine-mapping.component';
import {MachineMappingRoutingModule} from './machine-mapping-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MachineMappingRoutingModule,
    SharedModule
  ],
  declarations: [
    MachineMappingComponent,
    RemoveMachineMappingDirective
  ]
})
export class MachineMappingModule { }
