import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ProductService } from './products/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CardComponent, NgFor],
})
export class AppComponent {
  constructor(private product: ProductService) {}

  title = 'barato-coletivo';
  products = this.product.getAllProducts();
}
