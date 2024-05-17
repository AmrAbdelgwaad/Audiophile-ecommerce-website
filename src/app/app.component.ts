import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MainLinksComponent } from './components/main-links/main-links.component';
import { SharedCardComponent } from './components/shared-card/shared-card.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Audiophile-ecommerce-website';
  menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
