import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-generaQR',
  templateUrl: './generaQR.page.html',
  styleUrls: ['./generaQR.page.scss'],
})
export class GeneraQRPage implements OnInit {

  qrCodeString= 'Clase';
  scannedResult:any;

  constructor(private menuController: MenuController
    , public navController: NavController) { }

    usuariop={
      nombre:'',
      fecha:'',
      seccion:''
    }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('profe');
  }

  generarQR(){
    this.qrCodeString=this.usuariop.nombre+this.usuariop.seccion+this.usuariop.fecha;
  }

  verQR(){
    this.scannedResult=this.qrCodeString;
  }
}
