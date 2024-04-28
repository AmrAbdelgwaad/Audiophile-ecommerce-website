import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Audiophile | Home',
    loadComponent: () =>
      import('./home/home.component').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'headphones',
    loadComponent: () =>
      import('./headphones/headphones.component').then(
        (m) => m.HeadphonesComponent,
      ),
    title: 'Audiophile | Headphones',
  },
  {
    path: 'speakers',
    loadComponent: () =>
      import('./speakers/speakers.component').then((m) => m.SpeakersComponent),
    title: 'Audiophile | speakers',
  },
  {
    path: 'earphones',
    loadComponent: () =>
      import('./earphones/earphones.component').then(
        (m) => m.EarphonesComponent,
      ),
    title: 'Audiophile | earphones',
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
