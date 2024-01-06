import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CitasService } from 'src/app/servicios/citas.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {

  citaInicial:boolean = true

  constructor(private citasService:CitasService, private router:Router) { 
    addIcons({ arrowBackCircleSharp })
  }

  ngOnInit() {
    this.citaInicial = this.citasService.citaInicio
  }

  togle(){
    this.citaInicial = !this.citaInicial
    this.citasService.citaInicio = this.citaInicial
  }


  
}