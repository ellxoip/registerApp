import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarAsistenciaPageRoutingModule } from './eliminar-asistencia-routing.module';

import { EliminarAsistenciaPage } from './eliminar-asistencia.page';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarAsistenciaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EliminarAsistenciaPage],
  providers: [AsistenciaService]
})
export class EliminarAsistenciaPageModule {}
