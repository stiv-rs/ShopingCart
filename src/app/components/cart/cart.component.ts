import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  @Input() items: CartItem[] = [];

  @Output() idProductEmiter = new EventEmitter();
  
  onDeleteCart(id: number){
    this.idProductEmiter.emit(id);
  }
}
