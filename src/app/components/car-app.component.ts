import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItem } from '../models/cartItem';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'car-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, RouterOutlet],
  templateUrl: './car-app.component.html'
})
export class CarAppComponent implements OnInit{

  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;

  constructor(private sharingDataService: SharingDataService ,private service: ProductService){}
  
  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.onDeleteCart();
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
    this.calculateTotal();
    this.savesession();
  }

  onDeleteCart(): void{
    this.sharingDataService.idProductEventEmiter.subscribe((id) => {
      this.items = this.items.filter(item => item.product.id !== id);
      if (this.items.length == 0) {
        sessionStorage.removeItem('cart');
        sessionStorage.clear();
      }
      this.calculateTotal();
      this.savesession();
    });
  }

  calculateTotal():void{
    this.total = this.items.reduce((acumulator, item) => acumulator + item.quantity * item.product.price, 0);
  }

  savesession():void{
    sessionStorage.setItem('cart',JSON.stringify(this.items));
  }
}
