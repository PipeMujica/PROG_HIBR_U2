import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonInput, IonButton, IonIcon, IonText, IonCard } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { addCircleOutline, addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styleUrls: ['./citas-form.component.scss'],
  standalone: true,
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonIcon, IonText, IonCard]
})
export class CitasFormComponent  implements OnInit {

  frase:string = ""
  autor:string = ""
  @Output() onFraseAgregado = new EventEmitter<string>()
  @Output() onAutorAgregado = new EventEmitter<string>()

  constructor() {
    addIcons({
      addCircleOutline, addOutline
    })
   }

  ngOnInit() {}

  agregarCita() {
    this.onFraseAgregado.emit(this.frase)
    this.frase = ""
    this.onAutorAgregado.emit(this.autor)
    this.autor = ""
  }

}
