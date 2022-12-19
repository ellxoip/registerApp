import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RegistrodeprofesoresService } from '../../services/registrodeprofesores.service';


@Component({
  selector: 'app-perfilprofe',
  templateUrl: './perfilprofe.page.html',
  styleUrls: ['./perfilprofe.page.scss'],
})
export class PerfilprofePage implements OnInit {





  constructor(private navController: NavController, private menuController: MenuController, private usuario : RegistrodeprofesoresService){

  }
   ngOnInit() {

   }


    CerrarSesion() {

      localStorage.removeItem('ingresado');
      this.navController.navigateRoot('');


  }

  mostrarMenu(){
    this.menuController.enable(true,'profe')
    this.menuController.open('profe');
  }

}
