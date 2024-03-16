import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '@api/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  products = this._productService.products;

  constructor(
    private _productService: ProductService
  ) { }
}
