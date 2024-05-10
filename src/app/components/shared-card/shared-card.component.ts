import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss',
})
export class SharedCardComponent {}
