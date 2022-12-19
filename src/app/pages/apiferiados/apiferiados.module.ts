import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiferiadosPageRoutingModule } from './apiferiados-routing.module';

import { ApiferiadosPage } from './apiferiados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiferiadosPageRoutingModule
  ],
  declarations: [ApiferiadosPage]
})
export class ApiferiadosPageModule {}
