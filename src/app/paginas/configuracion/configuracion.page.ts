import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToggleChangeEventDetail } from '@ionic/angular';
import { IonToggleCustomEvent } from '@ionic/core'
import { ConfiguracionService } from '../../servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {

  eliminarCitaInicio:boolean = false

  constructor(
    private configuracionService:ConfiguracionService
  ) { }

  async ngOnInit() {
    console.log("ConfiuracionPage::ngOnInit")
    this.eliminarCitaInicio = this.configuracionService.eliminarCitas()
  }


  onEliminarCita($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    this.configuracionService.setEliminarCitas(this.eliminarCitaInicio)
  }
}
