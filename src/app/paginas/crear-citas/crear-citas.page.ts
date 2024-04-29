import { Component, OnInit } from '@angular/core';
import { CitasFormComponent } from 'src/app/componentes/citas-form/citas-form.component';
import { CitasListComponent } from 'src/app/componentes/citas-list/citas-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList } from '@ionic/angular/standalone';
import { CitasService } from 'src/app/servicios/citas.service';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { Citas } from 'src/app/frases/citas';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.page.html',
  styleUrls: ['./crear-citas.page.scss'],
  standalone: true,
  imports: [IonList, CitasFormComponent, CitasListComponent,
    IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CrearCitasPage implements OnInit {

  citas:Citas[] = []
  eliminarCita:boolean = false
  
  constructor(
    private citaService:CitasService,
    private configuracionService:ConfiguracionService
  ) { }

  ngOnInit() {
    console.log("CrearCitasPage::ngOnInit")
  }

  ionViewWillEnter():void {
    console.log("CrearCitasPage::ionViewWillEnter")
    this.actualizar()
  }

  actualizar(){
    console.log("actualizando...")
    this.eliminarCita = this.configuracionService.eliminarCitas()
    if(this.eliminarCita) {
      this.citas = this.citaService.getCita()
    }
  }

  agregarCita(citaStr: string) {
    const autor = ""
    const f = new Citas(citaStr, autor, false)
    this.citaService.agregarCita(f)
    this.actualizar()
  }
  
}
