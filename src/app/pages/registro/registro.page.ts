import { Component, OnInit } from '@angular/core';
import { AlertController, mdTransitionAnimation, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario} from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup; 
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[]; 

  constructor(private alertController: AlertController, 
              private registroService: RegistroserviceService, 
              private toastController: ToastController, 
              private NavCtrl: NavController,
              private fb: FormBuilder) {
                this.formularioRegistro = fb.group({ 
                  'nombre' : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
                  'correo' : new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(25)]), 
                  'password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
                  'confirmaPass': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)])
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value; 
    var existente = 0;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      })
      await alert.present();
      return;
    }
    else {
      if(form.password!=form.confirmaPass){
        this.alertError();
  
      }
    else{
      this.newUsuario.nomUsuario = form.nombre;
      this.newUsuario.correoUsuario = form.correo;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.repassUsuario = form.confirmaPass;
      this.registroService.getUsuarios().then(datos=>{ 
        this.usuarios = datos; 
    
        if (!datos || datos.length==0){
          this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
            this.newUsuario=<Usuario>{};
            this.showToast('Usuario Alumno Creado');
          });
          this.formularioRegistro.reset();
          this.NavCtrl.navigateRoot('loginAlumno');
        }else{
        
        for (let obj of this.usuarios){
          if (this.newUsuario.correoUsuario==obj.correoUsuario){
            existente = 1;
          }
        }
        if (existente == 1){
          this.alertDuplicado();
         
        }
        else{
          this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
            this.newUsuario=<Usuario>{};
            this.showToast('Usuario Alumno Creado');
          });
          this.formularioRegistro.reset();
          this.NavCtrl.navigateRoot('loginAlumno');
        }
    }
  }
)}
  }
  }
  async showToast(msg: string): Promise<void>{
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    await toast.present();
  }
  async alertError() {
    const alerta = await this.alertController.create({
      header: 'Las contraseñas no coinciden.',
      message: ' Vuelva a Intentar ',
      buttons: ['Aceptar']
    }) 
    await alerta.present();
  }

  async alertDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Correo ya Existente, Ingrese otro',
      buttons: ['Volver']
    })
    await alert.present();
  }





}
