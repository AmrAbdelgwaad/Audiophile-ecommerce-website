import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Audiophile | Home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'headphones',
    loadComponent: () =>
      import('./components/headphones/headphones.component').then(
        (m) => m.HeadphonesComponent,
      ),
    title: 'Audiophile | Headphones',
  },
  {
    path: 'speakers',
    loadComponent: () =>
      import('./components/speakers/speakers.component').then(
        (m) => m.SpeakersComponent,
      ),
    title: 'Audiophile | Speakers',
  },
  {
    path: 'earphones',
    loadComponent: () =>
      import('./components/earphones/earphones.component').then(
        (m) => m.EarphonesComponent,
      ),
    title: 'Audiophile | Earphones',
  },
  {
    path: 'xx99ii',
    loadComponent: () =>
      import('./products/xx99ii/xx99ii.component').then(
        (m) => m.Xx99iiComponent,
      ),
    title: 'Audiophile | XX99 II Headphone',
  },
  {
    path: 'xx99i',
    loadComponent: () =>
      import('./products/xx99i/xx99i.component').then((m) => m.Xx99iComponent),
    title: 'Audiophile | XX99 I Headphone',
  },
  {
    path: 'xx59',
    loadComponent: () =>
      import('./products/xx59/xx59.component').then((m) => m.Xx59Component),
    title: 'Audiophile | XX59 Headphone',
  },
  {
    path: 'zx9',
    loadComponent: () =>
      import('./products/zx9/zx9.component').then((m) => m.Zx9Component),
    title: 'Audiophile | ZX9 Speaker',
  },
  {
    path: 'zx7',
    loadComponent: () =>
      import('./products/zx7/zx7.component').then((m) => m.Zx7Component),
    title: 'Audiophile | ZX7 Speaker',
  },
  {
    path: 'yx1',
    loadComponent: () =>
      import('./products/yx1/yx1.component').then((m) => m.Yx1Component),
    title: 'Audiophile | YX1 Earphone',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
