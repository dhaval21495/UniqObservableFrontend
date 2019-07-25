import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MergeSettingComponent} from './merge-setting.component';

const routes: Routes = [
  {
    path: '',
    component: MergeSettingComponent,
    data: {
      title: 'Merge Setting',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Merge Setting',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeSettingRoutingModule { }
