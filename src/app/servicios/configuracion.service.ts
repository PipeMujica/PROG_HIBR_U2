import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private _eliminar:boolean = false

  constructor() { }

  eliminarCitas():boolean {
    return this._eliminar
  }

  setEliminarCitas(eliminar:boolean){
    this._eliminar = eliminar
  }

}
