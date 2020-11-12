import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showCart = false;

  showCartDrawer(value): void {
    this.showCart = value;
  }
}
