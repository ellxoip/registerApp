import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuariop{
  nomUsuariop: string;
  correoUsuariop: string;
  passUsuariop:string; 
  repassUsuariop:string;
}

const USERS_KEY = 'usuarios_profesores';

@Injectable({
  providedIn: 'root'
})
export class RegistrodeprofesoresService {

  private _storage!: Storage;
  newUsuariop: Usuariop = <Usuariop>{};

  constructor(private storage: Storage) {
    this.init();
   }

  //creamos el storage
  async init(){
    const storage = await this.storage.create();
    this._storage = storage; 
  }

  //creamos un usuario en el storage 
  async addUsuariop(dato: Usuariop):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos : Usuariop[])=>{ 
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY,datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }


  async getUsuariosp(): Promise<Usuariop[]>{
    return this.storage.get(USERS_KEY);
  }


}

