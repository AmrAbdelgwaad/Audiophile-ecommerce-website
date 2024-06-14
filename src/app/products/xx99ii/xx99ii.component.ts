import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-xx99ii',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './xx99ii.component.html',
  styleUrl: './xx99ii.component.scss',
})
export class Xx99iiComponent implements OnInit, OnDestroy {
  product = {
    id: 1,
    name: 'XX99 II',
    price: 2999,
    image: 'assets/images/cart/image-xx99-mark-two-headphones.jpg',
  };
  quantity: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.quantity = this.cartService.getProductQuantity(this.product.id);
    this.cartSubscription = this.cartService.cart$.subscribe(() => {
      this.quantity = this.cartService.getProductQuantity(this.product.id);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  increaseQuantity(): void {
    this.cartService.addToCart(this.product);
  }

  decreaseQuantity(): void {
    const cartItems = this.cartService.getCartItems();
    const existingProduct = cartItems.find(
      (item) => item.id === this.product.id,
    );
    if (existingProduct && existingProduct.quantity > 0) {
      this.cartService.updateQuantity(
        this.product.id,
        existingProduct.quantity - 1,
      );
    }
  }
}
