import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineMasterComponent} from './machine-master.component';

const routes: Routes = [
  {
    path: '',
    component: MachineMasterComponent,
    data: {
      title: 'Machine Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Machine Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineMasterRoutingModule { }
