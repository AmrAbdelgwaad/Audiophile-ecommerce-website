import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-zx9',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './zx9.component.html',
  styleUrl: './zx9.component.scss',
})
export class Zx9Component {
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
