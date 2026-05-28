import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import {
  Auth,
  createUserWithEmailAndPassword
} from '@angular/fire/auth';

@Component({
  selector: 'app-register',

  templateUrl: './register.page.html',

  styleUrls: ['./register.page.scss'],

  standalone: true,

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule
  ]
})

export class RegisterPage {

  email = '';
  password = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  async register() {

    try {

      await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      alert('Usuario creado');

      this.router.navigate(['/login']);

    } catch (error) {

      console.log(error);

      alert('Error al registrar');

    }

  }

}
