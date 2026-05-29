import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    window.addEventListener('error', (event) => {
      console.error('ERROR GLOBAL:', event.error);
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      console.error('UNHANDLED PROMISE:', event.reason);
    });
  }
}