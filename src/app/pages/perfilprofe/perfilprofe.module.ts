import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilprofePageRoutingModule } from './perfilprofe-routing.module';

import { PerfilprofePage } from './perfilprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilprofePageRoutingModule
  ],
  declarations: [PerfilprofePage]
})
export class PerfilprofePageModule {}
