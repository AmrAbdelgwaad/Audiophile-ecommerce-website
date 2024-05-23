import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-xx59',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './xx59.component.html',
  styleUrl: './xx59.component.scss',
})
export class Xx59Component {
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
