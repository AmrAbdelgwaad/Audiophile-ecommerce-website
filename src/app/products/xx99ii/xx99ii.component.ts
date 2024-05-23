import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-xx99ii',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './xx99ii.component.html',
  styleUrl: './xx99ii.component.scss',
})
export class Xx99iiComponent {
  quantity: number = 0;

  addToCart() {
    this.quantity = 1;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
