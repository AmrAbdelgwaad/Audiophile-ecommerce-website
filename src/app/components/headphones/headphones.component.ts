import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headphones',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.scss',
})
export class HeadphonesComponent {}
