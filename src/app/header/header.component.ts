import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;
  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
