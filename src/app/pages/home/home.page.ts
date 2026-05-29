import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { Router, RouterLink } from '@angular/router';

import {
  Auth,
  signOut
} from '@angular/fire/auth';

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
    IonButton,
    IonIcon,
    RouterLink
  ]
})

export class HomePage {

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  async logout() {

    await signOut(this.auth);

    this.router.navigate(['/login']);

  }

}