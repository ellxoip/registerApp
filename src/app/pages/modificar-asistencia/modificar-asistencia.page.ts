import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaConID } from 'src/app/interfaces/asistencia';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-modificar-asistencia',
  templateUrl: './modificar-asistencia.page.html',
  styleUrls: ['./modificar-asistencia.page.scss'],
})
export class ModificarAsistenciaPage implements OnInit {
  public idActiva = 0;
  public asistenciaActivo!: AsistenciaConID;

  public formulario: FormGroup;
  constructor(private fb: FormBuilder,
    private asistenciaServicio: AsistenciaService,
    private router: Router,
    private rutaActiva: ActivatedRoute) {
      this.formulario = this.fb.group({
        nombre: ['',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]],
        curso: ['',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]],
        fecha: ['',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]],
      })
    }
    public guardarAsistencia(){
      if(this.formulario.invalid ){
        this.formulario.markAllAsTouched();
        return;
      }
      this.asistenciaServicio.agregarNuevo({
        ...this.formulario.value
      })
      .subscribe(dato => {
        if(dato){
          alert("Guardado correctamente");
          this.formulario.reset();
          this.formulario.updateValueAndValidity();
          this.router.navigate(['']);
        }
      })
    }
    ngOnInit() {
      this.rutaActiva.paramMap.subscribe(parametros => {
        this.idActiva = +!parametros.get('idAsistencia');
        this.asistenciaServicio.buscarPorID(this.idActiva)
        .subscribe(asistencia => {
          if(asistencia){
            this.asistenciaActivo = asistencia;
            this.formulario.setValue({
              ...this.asistenciaActivo
            });
            this.formulario.updateValueAndValidity();
          }else{
            this.router.navigate(['']);
          }
        });
      })
    }
}
