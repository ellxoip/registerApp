import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asistencia, AsistenciaConID, AsistenciaParcial } from './../interfaces/asistencia';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private URL_API = 'http://localhost:3000/asistencia';
  public paginaActual = 1;
  private comAsistencia = new BehaviorSubject<Array<AsistenciaConID>>([]);
  public listaAsistencias$ = this.comAsistencia.asObservable();
  constructor(
    private cliente: HttpClient
  ) { }
  public agregarNuevo(asistencia: Asistencia): Observable<any> {
    return this.cliente.post(this.URL_API, asistencia, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
  // listar los primeros 10 asistencias
  public obtenerPrimeros10Asistencia(){
    this.cliente.get<Array<AsistenciaConID>>(`${this.URL_API}?_page=1`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      // Para notificar a los elementos subcritos
      this.comAsistencia.next(datos);
    })
  }

  public obtener10Mas(){
    this.cliente.get<Array<AsistenciaConID>>(`${this.URL_API}?_page=${this.paginaActual}`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      // Juntar los array
      // [1,2,3]
      // [4,5,6]
      // [1,2,3].concat([4,5,6]) -> [1,2,3,4,5,6]
      const arrayActual = this.comAsistencia.getValue()
      const arrayActualizado = arrayActual.concat(datos);
      this.comAsistencia.next(arrayActualizado);
    })
  }

  public buscarPorID(id: number): Observable<AsistenciaConID | null> {
    return this.cliente.get<AsistenciaConID | null>(`${this.URL_API}/${id}`);
  }
  // Eliminar
  public eliminarPorID(id: number): Observable<any> {
    return this.cliente.delete(`${this.URL_API}/${id}`);
  }


  // modificar
  public modificarPorID(id:number, asistencia: AsistenciaParcial): Observable<any> {
    //return this.cliente.put();
    // CLIENTE REST
    //return this.cliente.patch();
    return this.cliente.patch(`${this.URL_API}/${id}`, asistencia, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

}
