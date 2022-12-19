import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiferiadosPage } from './apiferiados.page';

const routes: Routes = [
  {
    path: '',
    component: ApiferiadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiferiadosPageRoutingModule {}
