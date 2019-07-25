import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CodeTypeMasterComponent} from './code-type-master.component';

const routes: Routes = [
  {
    path: '',
    component: CodeTypeMasterComponent,
    data: {
      title: 'Code Type Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Code Type Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeTypeMasterRoutingModule { }
