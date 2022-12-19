import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}
interface Componentep{

  icon: string;
  name: string;
  redirecTo: string;

}

interface Componentea{

  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


componentes : Componente[] = [
  {
    icon: 'home-outline',
    name: 'Inicio',
    redirecTo: '/inicio'
  },
  {
    icon: 'log-in-outline',
    name: 'Login Profesor',
    redirecTo: '/loginProfe'
  },

  {
    icon: 'information-circle-outline',
    name: 'Nosotros',
    redirecTo: '/card'
  },
  {
    icon: 'person-outline',
    name: 'Página Eleccion',
    redirecTo:'/elegir'
  },
  {
    icon: 'log-in-outline',
    name: 'Login Alumnos',
    redirecTo: '/loginAlumno'
  },



];

//componentes profes

componentes_p : Componentep[] = [

  {
    icon: 'information-circle-outline',
    name: 'Nosotros',
    redirecTo: '/card'
  },
  {
    icon: 'log-in-outline',
    name: 'Login Profesor',
    redirecTo: '/loginProfe'
  },

  {
    icon: 'qr-code-outline',
    name: 'Generar QR',
    redirecTo: '/generaQR'
  },

  {
    icon: 'umbrella-outline',
    name: 'Feriados Chile',
    redirecTo: '/apiferiados'
  },
  {
    icon: 'person-circle-outline',
    name: 'Perfil Docente',
    redirecTo: '/perfilprofe'
  },

];

//componentes alumnos

componentes_a : Componentea[] = [


  {
    icon: 'information-circle-outline',
    name: 'Nosotros',
    redirecTo: '/card'
  },
  {
    icon: 'log-in-outline',
    name: 'Login Alumnos',
    redirecTo: '/loginAlumno'
  },
  {
    icon: 'umbrella-outline',
    name: 'Feriados Chile',
    redirecTo: '/apiferiados'
  },
  {
    icon: 'qr-code-outline',
    name: 'Escanear QR',
    redirecTo: '/escanearQR'
  },

  {
    icon: 'person-circle-outline',
    name: 'Perfil Alumnos',
    redirecTo: '/perfilAlumno'
  },


];

}
