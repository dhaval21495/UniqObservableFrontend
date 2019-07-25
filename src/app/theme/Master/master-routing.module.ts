import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master',
      status: true
    },
    children: [
      {
        path: 'machine-master',
        loadChildren: './machine-master/machine-master.module#MachineMasterModule'
      },
      {
        path: 'section-master',
        loadChildren: './section-master/section-master.module#SectionMasterModule'
      },
      {
        path: 'position-master',
        loadChildren: './position-master/position-master.module#PositionMasterModule'
      },
      {
        path: 'machine-mapping',
        loadChildren: './machine-mapping/machine-mapping.module#MachineMappingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
