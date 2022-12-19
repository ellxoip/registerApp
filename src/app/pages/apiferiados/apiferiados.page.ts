import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from '../../services/serviceapi.service';
import { Datos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-apiferiados',
  templateUrl: './apiferiados.page.html',
  styleUrls: ['./apiferiados.page.scss'],
})
export class ApiferiadosPage implements OnInit {

  feriados: Datos[] = [];


  constructor( private feriado:ServiceapiService) { }

  ngOnInit() {

    this.feriado.getFeriados().subscribe(resp => {
      console.log('feriados',resp);
      this.feriados.push(...resp.data);
    });
  }

}
