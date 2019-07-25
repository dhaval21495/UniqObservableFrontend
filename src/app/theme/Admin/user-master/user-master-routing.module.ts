import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserMasterComponent} from './user-master.component';

const routes: Routes = [
  {
    path: '',
    component: UserMasterComponent,
    data: {
      title: 'User Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - User Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMasterRoutingModule { }
