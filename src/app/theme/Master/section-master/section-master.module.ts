import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionMasterComponent, RemoveSectionMasterDirective} from './section-master.component';
import {SectionMasterRoutingModule} from './section-master-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SectionMasterRoutingModule,
    SharedModule
  ],
  declarations: [
    SectionMasterComponent,
    RemoveSectionMasterDirective
  ]
})
export class SectionMasterModule { }
