import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasListComponent } from 'src/app/componentes/citas-list/citas-list.component';
import { CitasFormComponent } from 'src/app/componentes/citas-form/citas-form.component';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
            CitasFormComponent, CitasListComponent ]
})
export class GestionPage implements OnInit {

  constructor( private toastController:ToastController ) { }

  ngOnInit() {
  }

  async showEvent(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      color: "success"
    })
    toast.present()
  }

  async showDelete(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000,
      color: "danger"
    })
    toast.present()
  }
}
