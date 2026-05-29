import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

import {
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';

@Component({
  selector: 'app-posts',

  templateUrl: './posts.page.html',

  styleUrls: ['./posts.page.scss'],

  standalone: true,

  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]

})

export class PostsPage implements OnInit {

  encuestas: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit() {

    const encuestasRef = collection(
      this.firestore,
      'encuestas'
    );

    collectionData(encuestasRef, { idField: 'id' })
      .subscribe(data => {

        this.encuestas = data;

        console.log(data);

      });

  }

}