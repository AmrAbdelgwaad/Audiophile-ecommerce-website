import { Component } from '@angular/core';
import { MainLinksComponent } from '../main-links/main-links.component';
import { SharedCardComponent } from '../shared-card/shared-card.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [
    MainLinksComponent,
    SharedCardComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss',
})
export class SpeakersComponent {}
