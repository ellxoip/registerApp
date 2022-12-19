import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAlumnoPageRoutingModule } from './loginAlumno-routing.module';

import { LoginAlumnoPage } from './loginAlumno.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginAlumnoPageRoutingModule
  ],
  declarations: [LoginAlumnoPage]
})
export class LoginAlumnoPageModule {}