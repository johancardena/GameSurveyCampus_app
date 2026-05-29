import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games',

  templateUrl: './games.page.html',

  styleUrls: ['./games.page.scss'],

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]

})

export class GamesPage {

  busqueda = '';

  juegos: any[] = [];

  constructor(private gamesService: GamesService) {}

  buscar() {

    this.gamesService
      .buscarJuegos(this.busqueda)
      .subscribe((data: any) => {

        this.juegos = data.results;

        console.log(this.juegos);

      });

  }

}