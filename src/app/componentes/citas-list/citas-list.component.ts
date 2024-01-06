import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasService } from 'src/app/servicios/citas.service';
import { Cita } from 'src/app/modelo/cita';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons'

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule ]
})
export class CitasListComponent  implements OnInit {

  listaCitas:Cita[] = []
  @Output() showDelete: EventEmitter<string> = new EventEmitter()

  constructor(private citasService:CitasService) {
    addIcons ({ trashOutline })
   }

  ngOnInit() {
    this.ionViewWillEnter()
  }

  borrarCita(idNumber:number){
    this.citasService.borrarCita(idNumber)
    this.ionViewWillEnter()
    this.mensajeList()
  }

  mensajeList(){
    const mensaje:string = "Tu cita ha sido eliminada"
    this.showDelete.emit(mensaje)
  }

  ionViewWillEnter(){
    this.listaCitas = this.citasService.mostrarCitas()
  }
}
