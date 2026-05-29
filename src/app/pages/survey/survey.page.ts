import { Component, OnInit } from '@angular/core';

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

import { Geolocation } from '@capacitor/geolocation';

import {
  Camera,
  CameraResultType,
  CameraSource
} from '@capacitor/camera';

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

export class SurveyPage implements OnInit {

  alias = '';
  edad = '';
  rol = '';
  videojuego = '';
  plataforma = '';
  genero = '';
  comentario = '';

  latitud: number = 0;
  longitud: number = 0;

  foto: string = '';

  constructor(private firestore: Firestore) {}

  async ngOnInit() {

    await this.obtenerUbicacion();

  }

  async obtenerUbicacion() {

    try {

      // Solicitar permisos primero
      await Geolocation.requestPermissions();

      const coordinates =
        await Geolocation.getCurrentPosition();

      this.latitud =
        coordinates.coords.latitude;

      this.longitud =
        coordinates.coords.longitude;

      console.log('Ubicación obtenida:', this.latitud, this.longitud);

    } catch (error) {

      console.error('Error obteniendo ubicación:', error);

      alert('Error obteniendo ubicación. Verifica los permisos.');

    }

  }

  async tomarFoto() {

    try {

      const image = await Camera.getPhoto({

        quality: 50,

        allowEditing: false,

        resultType: CameraResultType.Base64,

        source: CameraSource.Photos

      });

      this.foto =
        `data:image/jpeg;base64,${image.base64String}`;

      console.log(this.foto);

    } catch (error) {

      console.log(error);

      alert('Error al tomar foto');

    }

  }

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

        latitud: this.latitud,
        longitud: this.longitud,

        foto: this.foto,

        fecha: new Date().toLocaleDateString()

      });

      alert('Encuesta guardada');

      this.alias = '';
      this.edad = '';
      this.rol = '';
      this.videojuego = '';
      this.plataforma = '';
      this.genero = '';
      this.comentario = '';

      this.foto = '';

    } catch (error) {

      console.log(error);

      alert('Error al guardar');

    }

  }

}