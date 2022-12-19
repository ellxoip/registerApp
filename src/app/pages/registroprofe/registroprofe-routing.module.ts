import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroprofePage } from './registroprofe.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroprofePageRoutingModule {}
