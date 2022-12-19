import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-escanearQR',
  templateUrl: './escanearQR.page.html',
  styleUrls: ['./escanearQR.page.scss'],
})
export class escanearQRPage implements OnInit {
  qrCodeString= 'Clase';
  scannedResult:any;
  scanActive: boolean = false;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Metodo no implementado.');
  }


  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scanActive = false;
        alert(result.content); //El contenido QR saldrá aquí

      } else {
        alert('DATOS NO ENCONTRADOS!');
      }
    } else {
      alert('NO PERMITIDO!');
    }
  }

  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }
}
