import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin',
      status: true
    },
    children: [
      {
        path: 'company-name',
        loadChildren: './company-name/company-name.module#CompanyNameModule'
      },
      {
        path: 'user-master',
        loadChildren: './user-master/user-master.module#UserMasterModule'
      },
      {
        path: 'menu-master',
        loadChildren: './menu-master/menu-master.module#MenuMasterModule'
      },
      {
        path: 'role-menu-master',
        loadChildren: './role-menu-master/role-menu-master.module#RoleMenuMasterModule'
      },
      {
        path: 'code-type-master',
        loadChildren: './code-type-master/code-type-master.module#CodeTypeMasterModule'
      },
      {
        path: 'code-master',
        loadChildren: './code-master/code-master.module#CodeMasterModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
