import { Component } from '@angular/core';
import { MainLinksComponent } from '../main-links/main-links.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [MainLinksComponent, RouterLink, NgOptimizedImage],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss',
})
export class SpeakersComponent {}
