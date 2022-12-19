import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { escanearQRPage } from './escanearQR.page';

const routes: Routes = [
  {
    path: '',
    component: escanearQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class escanearQRPageRoutingModule {}
