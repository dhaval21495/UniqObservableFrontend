import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyNameComponent} from './company-name.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyNameComponent,
    data: {
      title: 'Company Name',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Company Name',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyNameRoutingModule { }
