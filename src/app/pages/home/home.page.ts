import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',

  templateUrl: './home.page.html',

  styleUrls: ['./home.page.scss'],

  standalone: true,

  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ]

})

export class HomePage {}
