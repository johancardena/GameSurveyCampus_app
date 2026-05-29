import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage)
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage)
  },

  {
    path: 'survey',
    loadComponent: () =>
      import('./pages/survey/survey.page').then(m => m.SurveyPage)
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games.page').then( m => m.GamesPage)
  },
  {
  path: 'posts',
  loadComponent: () =>
    import('./pages/posts/posts.page').then(m => m.PostsPage)
},  {
    path: 'posts',
    loadComponent: () => import('./pages/posts/posts.page').then( m => m.PostsPage)
  }



];

