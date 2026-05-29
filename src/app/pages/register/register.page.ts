import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

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
  createUserWithEmailAndPassword
} from '@angular/fire/auth';

@Component({
  selector: 'app-register',

  templateUrl: './register.page.html',

  styleUrls: ['./register.page.scss'],

  standalone: true,

  imports: [
    CommonModule,
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

export class RegisterPage {

  nombre = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  async register() {

    try {

      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      if (this.password.length < 6) {
        alert('La contraseña debe tener mínimo 6 caracteres');
        return;
      }

      await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      alert('¡Cuenta creada exitosamente!');

      this.router.navigate(['/login']);

    } catch (error) {

      console.log(error);

      alert('Error al registrar. Verifica el correo o intenta más tarde');

    }

  }

}
