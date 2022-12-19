import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarAsistenciaPageRoutingModule } from './listar-asistencia-routing.module';

import { ListarAsistenciaPage } from './listar-asistencia.page';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarAsistenciaPageRoutingModule, /**Listo  */
    HttpClientModule
  ],
  declarations: [ListarAsistenciaPage],
  providers: [
    AsistenciaService
  ]
})
export class ListarAsistenciaPageModule {}
