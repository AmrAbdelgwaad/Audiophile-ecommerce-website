import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-zx7',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './zx7.component.html',
  styleUrl: './zx7.component.scss',
})
export class Zx7Component {
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
