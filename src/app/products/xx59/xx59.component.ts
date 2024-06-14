import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-xx59',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './xx59.component.html',
  styleUrl: './xx59.component.scss',
})
export class Xx59Component implements OnInit, OnDestroy {
  product = {
    id: 3,
    name: 'XX59',
    price: 899,
    image: 'assets/images/cart/image-xx59-headphones.jpg',
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
