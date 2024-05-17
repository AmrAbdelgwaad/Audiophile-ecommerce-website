import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-earphones',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './earphones.component.html',
  styleUrl: './earphones.component.scss',
})
export class EarphonesComponent {}
