import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilprofePage } from './perfilprofe.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilprofePageRoutingModule {}
