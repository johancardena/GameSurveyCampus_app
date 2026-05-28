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
  IonSelect,
  IonSelectOption,
  IonTextarea
} from '@ionic/angular/standalone';

import {
  Firestore,
  collection,
  addDoc
} from '@angular/fire/firestore';

@Component({
  selector: 'app-survey',

  templateUrl: './survey.page.html',

  styleUrls: ['./survey.page.scss'],

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
    IonSelect,
    IonSelectOption,
    IonTextarea
  ]

})

export class SurveyPage {

  alias = '';
  edad = '';
  rol = '';
  videojuego = '';
  plataforma = '';
  genero = '';
  comentario = '';

  constructor(private firestore: Firestore) {}

  async guardarEncuesta() {

    try {

      const encuestasRef = collection(
        this.firestore,
        'encuestas'
      );

      await addDoc(encuestasRef, {

        alias: this.alias,
        edad: this.edad,
        rol: this.rol,
        videojuego: this.videojuego,
        plataforma: this.plataforma,
        genero: this.genero,
        comentario: this.comentario,
        fecha: new Date()

      });

      alert('Encuesta guardada');

      this.alias = '';
      this.edad = '';
      this.rol = '';
      this.videojuego = '';
      this.plataforma = '';
      this.genero = '';
      this.comentario = '';

    } catch (error) {

      console.log(error);

      alert('Error al guardar');

    }

  }

}