import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item!: CartItem;
  @Output() removeItem = new EventEmitter<number>();
  @Output() updateQuantity = new EventEmitter<{
    id: number;
    quantity: number;
  }>();

}
