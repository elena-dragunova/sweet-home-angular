import { Component } from '@angular/core';

/**
 * Main root component.
 */
@Component({
  selector: 'sha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   * Boolean prop.
   * Describes whether the cart is shown or not.
   */
  public showCart = false;

  /**
   * Shows or hides cart drawer.
   */
  public showCartDrawer(value: boolean): void {
    this.showCart = value;
  }
}
