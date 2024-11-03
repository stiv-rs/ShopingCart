import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'car-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './car-app.component.html'
})
export class CarAppComponent implements OnInit{

  products: Product[] = [];
  items: CartItem[] = [];

  constructor(private service: ProductService){}
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

}
