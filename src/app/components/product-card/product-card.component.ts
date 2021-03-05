import { Component, Input } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../../models/product';

/**
 * Product Card common component.
 */
@Component({
  selector: 'sha-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  /**
   * Product of the current card.
   */
  @Input() public product: Product;

  /**
   * FontAwesome ShoppingCart icon.
   */
  public faShoppingCart = faShoppingCart;

  constructor() { }
}
