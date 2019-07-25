import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SectionMasterComponent} from './section-master.component';

const routes: Routes = [
  {
    path: '',
    component: SectionMasterComponent,
    data: {
      title: 'Section Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Section Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionMasterRoutingModule { }
