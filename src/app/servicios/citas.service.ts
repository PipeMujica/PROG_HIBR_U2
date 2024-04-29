import { Injectable } from '@angular/core';
import { Citas } from '../frases/citas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private _citas:Citas[] = [
    new Citas("Andar detrás de lo imposible es locura; pero a los malvados no les cabe otro modo de actuar", "Marco Aurelio", false)
  ]

  constructor() { }

  agregarCita(cita:Citas){
    this._citas.push(cita)
  }
  
  getCita():Citas[] {
    console.dir(this._citas)
    return this._citas
  }

  eliminarCita(cita:Citas) {
    this._citas.slice()
  }
}
