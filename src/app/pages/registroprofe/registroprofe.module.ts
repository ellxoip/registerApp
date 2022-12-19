import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroprofePageRoutingModule } from './registroprofe-routing.module';

import { RegistroprofePage } from './registroprofe.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroprofePageRoutingModule
  ],
  declarations: [RegistroprofePage]
})
export class RegistroprofePageModule {}
