import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems';
  private vatRate = 0.2; // 20% VAT
  private shippingCost = 50; // $50 shipping

  private cartSubject = new BehaviorSubject<any[]>(
    this.getCartItemsFromStorage(),
  );
  cart$ = this.cartSubject.asObservable();

  constructor(private snackBar: MatSnackBar) {}

  private getCartItemsFromStorage(): any[] {
    const cartItems = localStorage.getItem(this.cartKey);
    return cartItems ? JSON.parse(cartItems) : [];
  }

  private saveCartItemsToStorage(cartItems: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
    this.cartSubject.next(cartItems);
  }

  getCartItems(): any[] {
    return this.cartSubject.getValue();
  }

  addToCart(product: any): void {
    const cartItems = this.getCartItems();
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );
    if (existingProductIndex >= 0) {
      cartItems[existingProductIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cartItems.push(product);
      this.snackBar.open(`product has been added to the cart`, 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
    this.saveCartItemsToStorage(cartItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const cartItems = this.getCartItems();
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    if (productIndex >= 0) {
      cartItems[productIndex].quantity = quantity;
      if (cartItems[productIndex].quantity <= 0) {
        cartItems.splice(productIndex, 1);
      }
      this.saveCartItemsToStorage(cartItems);
    }
  }

  clearCart(): void {
    this.saveCartItemsToStorage([]);
  }

  getTotalPrice(): number {
    const cartItems = this.getCartItems();
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  getVat(): number {
    return this.getTotalPrice() * this.vatRate;
  }

  getShippingCost(): number {
    return this.shippingCost;
  }

  getGrandTotal(): number {
    return this.getTotalPrice() + this.getShippingCost();
  }

  getProductQuantity(productId: number): number {
    const cartItems = this.getCartItems();
    const product = cartItems.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  }

  getTotalQuantity(): number {
    const cartItems = this.getCartItems();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
