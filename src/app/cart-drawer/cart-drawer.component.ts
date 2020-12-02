import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * Cart Drawer component.
 */
@Component({
  selector: 'sha-cart-drawer',
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.scss'],
})
export class CartDrawerComponent {
  /**
   * Desribes whether the cart is shown or not.
   */
  @Input() public show: boolean;
  /**
   * Emitting event for hiding cart drawer.
   */
  @Output() public hideCart = new EventEmitter<boolean>();

  constructor() { }

  /**
   * Hides cart drawer.
   */
  public onHideCart(): void {
    this.hideCart.emit(false);
  }

}
