import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaConID } from 'src/app/interfaces/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-listar-asistencia',
  templateUrl: './listar-asistencia.page.html',
  styleUrls: ['./listar-asistencia.page.scss'],
})
export class ListarAsistenciaPage implements OnInit {
  public asistencias: Array<AsistenciaConID> = [];
  constructor(
    private apiAsistencia: AsistenciaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.apiAsistencia.obtenerPrimeros10Asistencia();
    this.apiAsistencia.listaAsistencias$.subscribe(datos => {
      this.asistencias = datos;
    });
  }

}
