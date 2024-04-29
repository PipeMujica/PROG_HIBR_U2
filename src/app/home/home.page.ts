import { Component } from '@angular/core';
import { IonButtons, IonButton, IonIcon, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';
import {settingsOutline, addCircleSharp, add} from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonButtons, IonButton, IonIcon, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle,
    IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonFab, IonFabButton],
})

export class HomePage {
  constructor() {
    addIcons({
      settingsOutline, addCircleSharp, add
    })
  }
}
