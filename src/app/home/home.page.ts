import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CitasComponent } from '../componentes/citas/citas.component';
import { CitasService } from '../servicios/citas.service';
import { addIcons } from 'ionicons';
import { addOutline, settingsOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule, IonicModule, CitasComponent],
})
export class HomePage implements OnInit {

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