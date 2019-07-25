import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CodeMasterComponent} from './code-master.component';

const routes: Routes = [
  {
    path: '',
    component: CodeMasterComponent,
    data: {
      title: 'Code Master',
      icon: 'icon-layout-grid2-alt',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - Code Master',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeMasterRoutingModule { }
