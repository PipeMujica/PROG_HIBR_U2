import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Citas } from 'src/app/frases/citas';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonCheckbox, CheckboxChangeEventDetail, IonIcon, IonButton } 
from '@ionic/angular/standalone'
import { IonCheckboxCustomEvent } from '@ionic/core'
import { addIcons } from 'ionicons';
import {trash } from 'ionicons/icons'

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonCheckbox, CommonModule, IonList, IonItem, IonLabel]
})
export class CitasListComponent  implements OnInit {

  @Input() cita:Citas[] = []
  @Output() onChange = new EventEmitter<Citas>()


  constructor() {
    addIcons({
      trash
    })
   }

  ngOnInit() {
    console.log("CitasListComponent::ngOnInit()")
  }

  ionViewWillEnter() {
    console.log("CitasListComponent::ionViewWillEnter()")
  }

  onEliminarCita(p:Citas, $event: IonCheckboxCustomEvent<CheckboxChangeEventDetail<any>>){
    const eliminar = $event.detail.checked
    p.eliminar = eliminar
    this.onChange.emit(p)
  }
}
