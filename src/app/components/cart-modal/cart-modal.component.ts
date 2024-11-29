import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html'
})
export class CartModalComponent {
  @Input() items: CartItem[] = [];

  @Input() total = 0;

  @Output() idProductEmiter = new EventEmitter();

  @Output() closeEventEmitter = new EventEmitter(); 

  closeCart(): void{
    this.closeEventEmitter.emit();
  }
  
  onDeleteCart(id: number){
    this.idProductEmiter.emit(id);
  }
}
