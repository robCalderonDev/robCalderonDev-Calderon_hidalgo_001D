import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


export interface Datos{
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  modified: number;
}
const ITEMS_KEY = 'my-datos'

@Injectable({
  providedIn: 'root'
})
export class ServicesdatosService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }
   async init(){

    const storage = await this.storage.create();

    this._storage = storage;

  }
  addDatos(dato: Datos): Promise<any>{

    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      }else {
        return this.storage.set(ITEMS_KEY, [dato]);

      }



    })



  }
  getDatos(): Promise<Datos[]>{
    return this.storage.get(ITEMS_KEY);
  }
}
