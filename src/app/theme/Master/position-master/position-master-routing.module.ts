import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PositionMasterComponent} from './position-master.component';

const routes: Routes = [
  {
    path: '',
    component: PositionMasterComponent,
    data: {
      title: 'Position Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Position Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionMasterRoutingModule { }
