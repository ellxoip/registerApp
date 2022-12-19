import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators,FormBuilder}
from '@angular/forms';

@Component({
  selector: 'app-loginAlumno',
  templateUrl: './loginAlumno.page.html',
  styleUrls: ['./loginAlumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioLogin = fb.group({
                  'correo': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
                 })
               }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      if(datos!=null){

      for(let obj of datos){
        if(obj.correoUsuario===f.correo && obj.passUsuario===f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('perfilalumno');
        }
      }
    }
      if(a==0){
        this.alertMsg();
      }
    })
  }


  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: 'Correo o Contraseña Invalidos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
}
