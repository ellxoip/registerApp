import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfePageRoutingModule } from './loginProfe-routing.module';

import { LoginProfePage } from './loginProfe.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginProfePageRoutingModule
  ],
  declarations: [LoginProfePage]
})
export class LoginProfePageModule {}