import {Component, EventEmitter, Output} from '@angular/core';
import { faEnvelope, faPhone, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;
  faShoppingCart = faShoppingCart;

  @Output() showCartDrawer = new EventEmitter<boolean>();

  constructor() { }

  onShowCart(): void {
    this.showCartDrawer.emit(true);
  }
}
