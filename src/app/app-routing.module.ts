import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: '',
        loadChildren: './theme/auth/login/basic-login/basic-login.module#BasicLoginModule'
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        //redirectTo: 'dashboard/project',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'Admin',
        loadChildren: './theme/Admin/admin.module#AdminModule'
      },
      {
        path: 'Master',
        loadChildren: './theme/Master/master.module#MasterModule'
      },
      {
        path: 'Transaction',
        loadChildren: './theme/Transaction/transaction.module#TransactionModule'
      },
      {
        path: 'Report',
        loadChildren: './theme/Reports/Reports.module#ReportsModule'
      },
      {
        path: 'landing',
        loadChildren: './theme/landing/landing.module#LandingModule'
      },
      {
        path: 'bootstrap-table',
        loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule'
      },
      {
        path: 'data-table',
        loadChildren: './theme/table/data-table/data-table.module#DataTableModule'
      },
      {
        path: 'user',
        loadChildren: './theme/user/user.module#UserModule'
      },
      {
        path: 'simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
