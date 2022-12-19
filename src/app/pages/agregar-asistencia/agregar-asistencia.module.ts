import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAsistenciaPageRoutingModule } from './agregar-asistencia-routing.module';

import { AgregarAsistenciaPage } from './agregar-asistencia.page';
import { HttpClientModule } from '@angular/common/http';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAsistenciaPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AgregarAsistenciaPage],
  providers: [
    AsistenciaService
  ]
})
export class AgregarAsistenciaPageModule {}
