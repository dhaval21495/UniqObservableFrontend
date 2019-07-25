import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachineMappingComponent} from './machine-mapping.component';

const routes: Routes = [
  {
    path: '',
    component: MachineMappingComponent,
    data: {
      title: 'Machine Mapping',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Machine Mapping',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineMappingRoutingModule { }
