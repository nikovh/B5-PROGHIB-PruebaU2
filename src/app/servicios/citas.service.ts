import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private _citas:Cita[] = [
    new Cita(1, "El poder no cambia a las personas, solo revela quiénes son realmente.","Meryl Streep"),
    new Cita(2, "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera.","Albert Einstein"),
    new Cita(3, "El cuerpo humano es el carruaje; el yo, el hombre que lo conduce; el pensamiento son las riendas, y los sentimientos, los caballos.","Platón"),
    new Cita(4, "Estar preparado es importante, saber esperarlo es aún más, pero aprovechar el momento adecuado es la clave de la vida.","Arthur Schnitzler")
  ]
  
  constructor() { }

  agregarCita(c:Cita){
    this._citas.push(c)
  }

  mostrarCitas():Cita[]{
    return this._citas
  }

  borrarCita(citasID: number) {
    this._citas = this._citas.filter((cita) => {
      return cita.ID !== citasID
    })
  }

  CitaRandom() {
    return this._citas[Math.floor(Math.random() * this._citas.length)]
  }

  citaInicio:boolean = true

  

}