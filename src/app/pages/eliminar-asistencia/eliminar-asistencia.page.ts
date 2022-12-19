import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaConID } from 'src/app/interfaces/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-eliminar-asistencia',
  templateUrl: './eliminar-asistencia.page.html',
  styleUrls: ['./eliminar-asistencia.page.scss'],
})
export class EliminarAsistenciaPage implements OnInit {
  public idActiva = '';
  public asistenciaActivo!: AsistenciaConID;
  constructor(
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private apiAsistencia: AsistenciaService
  ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(parametros => {
      this.idActiva = parametros['idAsistencia'];
      this.apiAsistencia.buscarPorID(+this.idActiva)
      .subscribe(asistencia => {
        if(asistencia){
          this.asistenciaActivo = asistencia;
        }else {
          this.router.navigate(['']);
        }
      })
    });
  }

  public borrar(){
    this.apiAsistencia.eliminarPorID(+this.idActiva)
    .subscribe(dato => {
      if(dato){
        alert('Borrado :D');
        this.router.navigate(['']);
      }
    })
  }

}

