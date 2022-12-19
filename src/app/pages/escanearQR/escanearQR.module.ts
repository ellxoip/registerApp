import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { escanearQRPageRoutingModule } from './escanearQR-routing.module';

import { escanearQRPage } from './escanearQR.page';

import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    escanearQRPageRoutingModule
  ],
  declarations: [escanearQRPage]
})
export class escanearQRPageModule {}
