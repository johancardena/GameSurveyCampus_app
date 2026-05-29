import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import {
  Auth,
  signInWithEmailAndPassword
} from '@angular/fire/auth';

@Component({
  selector: 'app-login',

  templateUrl: './login.page.html',

  styleUrls: ['./login.page.scss'],

  standalone: true,

  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    FormsModule,
    RouterLink
  ]
})

export class LoginPage {

  email = '';
  password = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  async login() {

    try {

      await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      alert('Login correcto');

      this.router.navigate(['/home']);

    } catch (error) {

      console.log(error);

      alert('Error al iniciar sesión');

    }

  }

}
