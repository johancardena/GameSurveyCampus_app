import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  private apiKey = '20e65cc8a7974ea48cbe8edbf34aa358';

  private apiUrl =
    'https://api.rawg.io/api/games';

  constructor(private http: HttpClient) {}

  buscarJuegos(nombre: string) {

    return this.http.get(

      `${this.apiUrl}?key=${this.apiKey}&search=${nombre}`

    );

  }

}