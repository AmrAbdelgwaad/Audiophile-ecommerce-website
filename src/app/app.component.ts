import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MainLinksComponent } from './components/main-links/main-links.component';
import { SharedCardComponent } from './components/shared-card/shared-card.component';
import { CartComponent } from './components/cart/cart.component';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    FooterComponent,
    MainLinksComponent,
    SharedCardComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Audiophile-ecommerce-website';
  menuOpened = false;
  cartOpened = false;
  totalQuantity: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe(() => {
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  toggleCart() {
    this.cartOpened = !this.cartOpened;
  }
}
