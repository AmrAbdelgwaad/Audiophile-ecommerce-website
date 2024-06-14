import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-yx1',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './yx1.component.html',
  styleUrl: './yx1.component.scss',
})
export class Yx1Component implements OnInit, OnDestroy {
  product = {
    id: 6,
    name: 'YX1',
    price: 599,
    image: 'assets/images/cart/image-yx1-earphones.jpg',
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
