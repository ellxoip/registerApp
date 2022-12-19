import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarAsistenciaPageRoutingModule } from './modificar-asistencia-routing.module';

import { ModificarAsistenciaPage } from './modificar-asistencia.page';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarAsistenciaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ModificarAsistenciaPage],
  providers: [
    AsistenciaService
  ]
})
export class ModificarAsistenciaPageModule {}
