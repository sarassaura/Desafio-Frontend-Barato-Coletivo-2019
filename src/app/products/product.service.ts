import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url = 'https://fakestoreapi.com/products/';

  products: Product[] = [];

  getAllProducts() {
    this.http
      .get<Product[]>(this.url)
      .subscribe((data: Product[]) => (this.products = data));

    return this.products;
  }
}
