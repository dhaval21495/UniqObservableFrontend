import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports',
      status: true
    },
    children: [
      {
        path: 'CompanyReports',
        loadChildren: './company-Reports/company-Reports.module#CompanyReportsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
