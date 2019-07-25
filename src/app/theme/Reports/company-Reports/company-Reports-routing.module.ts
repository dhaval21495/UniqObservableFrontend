import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyReportsComponent} from './company-Reports.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyReportsComponent,
    data: {
      title: 'Company Reports',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Company Reports',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyReportsRoutingModule { }
