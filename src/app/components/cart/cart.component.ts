import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Subscription } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  /* vat: number = 0;
  shippingCost: number = 0;
  grandTotal: number = 0;*/
  private cartSubscription!: Subscription;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.totalPrice = this.cartService.getTotalPrice();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  clearCart(): void {
    this.cartService.clearCart();
  }

  increaseQuantity(productId: number): void {
    this.cartService.addToCart({ id: productId });
  }

  decreaseQuantity(productId: number): void {
    const cartItems = this.cartService.getCartItems();
    const existingProduct = cartItems.find((item) => item.id === productId);
    if (existingProduct && existingProduct.quantity > 0) {
      this.cartService.updateQuantity(productId, existingProduct.quantity - 1);
    }
  }
}
