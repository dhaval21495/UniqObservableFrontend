import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuMasterComponent} from './menu-master.component';

const routes: Routes = [
  {
    path: '',
    component: MenuMasterComponent,
    data: {
      title: 'Menu Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Menu Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuMasterRoutingModule { }
