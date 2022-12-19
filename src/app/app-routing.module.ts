import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './noingresado.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('../app/pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'loginProfe',
    loadChildren: () => import('./pages/loginProfe/loginProfe.module').then( m => m.LoginProfePageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
    {
    path: 'generaQR',
    loadChildren: () => import('./pages/generaQR/generaQR.module').then( m => m.GeneraQRPageModule),

  },
  {
    path: 'elegir',
    loadChildren: () => import('./pages/elegir/elegir.module').then( m => m.ElegirPageModule)
  },
  {
    path: 'escanearQR',
    loadChildren: () => import('./pages/escanearQR/escanearQR.module').then( m => m.escanearQRPageModule),

  },

  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registroprofe',
    loadChildren: () => import('./pages/registroprofe/registroprofe.module').then( m => m.RegistroprofePageModule)
  },
  {
    path: 'loginAlumno',
    loadChildren: () => import('./pages/loginAlumno/loginAlumno.module').then( m => m.LoginAlumnoPageModule)
  },
  {
    path: 'perfilalumno',
    loadChildren: () => import('./pages/perfilalumno/perfilalumno.module').then( m => m.PerfilalumnoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfilprofe',
    loadChildren: () => import('./pages/perfilprofe/perfilprofe.module').then( m => m.PerfilprofePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'apiferiados',
    loadChildren: () => import('./pages/apiferiados/apiferiados.module').then( m => m.ApiferiadosPageModule),

  },
  {
    path: 'listar-asistencia',
    loadChildren: () => import('./pages/listar-asistencia/listar-asistencia.module').then( m => m.ListarAsistenciaPageModule)
  },
  {
    path: 'modificar-asistencia/:idAsistencia',
    loadChildren: () => import('./pages/modificar-asistencia/modificar-asistencia.module').then( m => m.ModificarAsistenciaPageModule)
  },
  {
    path: 'eliminar-asistencia/:idAsistencia',
    loadChildren: () => import('./pages/eliminar-asistencia/eliminar-asistencia.module').then( m => m.EliminarAsistenciaPageModule)
  },
  {
    path: 'agregar-asistencia',
    loadChildren: () => import('./pages/agregar-asistencia/agregar-asistencia.module').then( m => m.AgregarAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
