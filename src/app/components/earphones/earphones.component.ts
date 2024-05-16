import { Component } from '@angular/core';
import { MainLinksComponent } from '../main-links/main-links.component';
import { SharedCardComponent } from '../shared-card/shared-card.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-earphones',
  standalone: true,
  imports: [
    MainLinksComponent,
    SharedCardComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './earphones.component.html',
  styleUrl: './earphones.component.scss',
})
export class EarphonesComponent {}
