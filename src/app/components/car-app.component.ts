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

  onAddCart(product: Product): void{
    const hasItem = this.items.find(item => item.product.id === product.id );
    if (hasItem) {
     this.items = this.items.map(item => {
       if (item.product.id === product.id) {
        return {
          ...item, quantity: item.quantity + 1
        }
      }
      return item;
     })  
    }else{
      this.items = [...this.items, {product: {...product}, quantity: 1}];
    }
  }

  onDeleteCart(id: number): void{
    this.items = this.items.filter(item => item.product.id !== id);
  }
}
