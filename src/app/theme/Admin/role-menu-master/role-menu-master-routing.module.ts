import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoleMenuMasterComponent} from './role-menu-master.component';

const routes: Routes = [
  {
    path: '',
    component: RoleMenuMasterComponent,
    data: {
      title: 'Role Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Role Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleMenuMasterRoutingModule { }
