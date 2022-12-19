import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarAsistenciaPage } from './eliminar-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarAsistenciaPageRoutingModule {}
