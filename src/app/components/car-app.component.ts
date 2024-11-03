import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'car-app',
  standalone: true,
  imports: [CatalogComponent],
  templateUrl: './car-app.component.html'
})
export class CarAppComponent implements OnInit{

  products: Product[] = [];

  constructor(private service: ProductService){}
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

}
