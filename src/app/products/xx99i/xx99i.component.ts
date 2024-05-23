import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-xx99i',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './xx99i.component.html',
  styleUrl: './xx99i.component.scss',
})
export class Xx99iComponent {
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
