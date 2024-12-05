import { Component, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  
  items: CartItem[] = [];
  total = 0;
  idProductEmiter = new EventEmitter();

  onDeleteCart(id: number){
    this.idProductEmiter.emit(id);
  }
  
}
