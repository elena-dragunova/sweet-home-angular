import {Component, EventEmitter, Output} from '@angular/core';
import { faEnvelope, faPhone, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

/**
 * Header component.
 */
@Component({
  selector: 'sha-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * FontAwesome Envelope icon.
   */
  public faEnvelope = faEnvelope;
  /**
   * FontAwesome Phone icon.
   */
  public faPhone = faPhone;
  /**
   * FontAwesome User icon.
   */
  public faUser = faUser;
  /**
   * FontAwesome ShoppingCart icon.
   */
  public faShoppingCart = faShoppingCart;

  /**
   * Emits event for showing cart drawer.
   */
  @Output() public showCartDrawer = new EventEmitter<boolean>();

  constructor() { }

  /**
   * Shows cart drawer.
   */
  public onShowCart(): void {
    this.showCartDrawer.emit(true);
  }
}
