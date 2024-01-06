import { Component, OnInit, Input } from '@angular/core';
// import { CitasFormComponent } from '../citas-form/citas-form.component';
// import { CitasListComponent } from '../citas-list/citas-list.component';
import { CitasService } from 'src/app/servicios/citas.service';
// import { addCircleOutline } from 'ionicons/icons';
// import { addIcons } from 'ionicons';
// import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  standalone: true,
  imports : [ CommonModule, FormsModule, IonicModule]
})
export class CitasComponent  implements OnInit {

  cita:string = ""
  autor:string = ""
  @Input() mostrarCita:boolean = true
  
  
  constructor( private citaService:CitasService ) {}

  ngOnInit(): void {
    this.ionViewWillEnter()
  }

  ionViewWillEnter(){
    var _cita = this.citaService.CitaRandom()
    this.cita = _cita.cita
    this.autor= _cita.autor
  }
}
