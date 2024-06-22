import { Component } from '@angular/core';
import { productsMock } from '../shared/products.mock';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  readonly products = productsMock;

  addToCart(product: any) {
    console.log('Product added to cart');
  }
}
