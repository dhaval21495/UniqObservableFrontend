import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MergeSettingComponent, RemoveMergeSettingDirective} from './merge-setting.component';
import {MergeSettingRoutingModule} from './merge-setting-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MergeSettingRoutingModule,
    SharedModule
  ],
  declarations: [
    MergeSettingComponent,
    RemoveMergeSettingDirective
  ]
})
export class MergeSettingModule { }
