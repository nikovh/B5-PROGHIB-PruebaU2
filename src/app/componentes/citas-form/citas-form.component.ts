import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CitasService } from 'src/app/servicios/citas.service';
import { Cita } from 'src/app/modelo/cita';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styleUrls: ['./citas-form.component.scss'],
  standalone: true,
  imports: [ RouterModule, FormsModule, CommonModule, IonicModule ]
})
export class CitasFormComponent  implements OnInit {

  citaStr: any
  autorStr: any
  @Output() showEvent:EventEmitter<string> = new EventEmitter()

  constructor(private citaService:CitasService) { }

  ngOnInit() {}

  guardarCita(){
    var _listaCitas = this.citaService.mostrarCitas
    var cita = new Cita(_listaCitas.length + 1, this.citaStr, this.autorStr)
    this.citaService.agregarCita(cita)
    this.mensajeForm()
  }

  mensajeForm(){
    const mensaje:string = "Tu cita ha sido ingresada correctamente."
    this.showEvent.emit(mensaje)
  }
}
