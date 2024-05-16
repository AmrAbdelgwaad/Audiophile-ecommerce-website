import { Component } from '@angular/core';
import { MainLinksComponent } from '../main-links/main-links.component';
import { SharedCardComponent } from '../shared-card/shared-card.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headphones',
  standalone: true,
  imports: [
    MainLinksComponent,
    SharedCardComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.scss',
})
export class HeadphonesComponent {}
