import { Component, OnInit } from '@angular/core';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { NavController, MenuController } from '@ionic/angular'

@Component({
  selector: 'app-perfilalumno',
  templateUrl: './perfilalumno.page.html',
  styleUrls: ['./perfilalumno.page.scss'],
})
export class PerfilalumnoPage implements OnInit {

  usuarios: Usuario[]=[];



  constructor(private navController: NavController, private usuario : RegistroserviceService, private menuController: MenuController){

  }
   ngOnInit() {

   }



  mostrarMenu(){
    this.menuController.enable(true,'alumno')
    this.menuController.open('alumno');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuarios);
  }

}
