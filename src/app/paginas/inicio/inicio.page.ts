import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CitasComponent } from 'src/app/componentes/citas/citas.component';
import { CitasService } from 'src/app/servicios/citas.service';
import { addIcons } from 'ionicons';
import { addOutline, settingsOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
            IonHeader, IonToolbar, IonTitle, IonContent, CitasComponent],
})
export class InicioPage implements OnInit {

  inicioTogle:boolean = true

  constructor(
    private router:Router,
    private citasService:CitasService
  ) {
    addIcons({ addOutline, settingsOutline })
   }

  ngOnInit() {
    this.ionViewWillEnter()
  }

  irGestion(){
    this.router.navigate(['/paginas/gestion'])
  }

  irConfiguracion(){
    this.router.navigate(['/paginas/configuracion'])
  }

  ionViewWillEnter(){
    this.inicioTogle = this.citasService.citaInicio
  }
}
