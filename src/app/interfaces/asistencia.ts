export interface Asistencia {
  nombre: string;
  curso: string;
  fecha: string;

}

export interface AsistenciaConID extends Asistencia {
  id: number;
}

export interface AsistenciaParcial extends Partial<Asistencia>{

}
