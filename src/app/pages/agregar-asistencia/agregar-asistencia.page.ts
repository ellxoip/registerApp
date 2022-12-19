import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.page.html',
  styleUrls: ['./agregar-asistencia.page.scss'],
})
export class AgregarAsistenciaPage implements OnInit {
  qrCodeString= 'Clase';
  scannedResult:any;
  scanActive: boolean = false;

  public formulario: FormGroup;
  constructor(private fb: FormBuilder,
    private asistenciaServicio: AsistenciaService,
    private router: Router) {
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
  }

}
