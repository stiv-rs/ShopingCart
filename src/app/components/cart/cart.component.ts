import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnChanges{
  total = 0;
  
  @Input() items: CartItem[] = [];
  
  @Output() idProductEmiter = new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void {
    // let itemsChanges = changes['items']  solo para ver o usar los cambios anteriores o posteriores
    this.calculateTotal();
    this.savesession();
  }

  onDeleteCart(id: number){
    this.idProductEmiter.emit(id);
  }
  
  calculateTotal():void{
    this.total = this.items.reduce((acumulator, item) => acumulator + item.quantity * item.product.price, 0);
  }

  savesession():void{
    sessionStorage.setItem('cart',JSON.stringify(this.items));
  }
}
