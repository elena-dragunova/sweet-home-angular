import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss']
})
export class CartDrawerComponent {
  @Input() show: boolean;
  @Output() hideCart = new EventEmitter<boolean>();

  constructor() { }

  onHideCart(): void {
    this.hideCart.emit(false);
  }

}
