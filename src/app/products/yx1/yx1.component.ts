import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-yx1',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './yx1.component.html',
  styleUrl: './yx1.component.scss',
})
export class Yx1Component {
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
