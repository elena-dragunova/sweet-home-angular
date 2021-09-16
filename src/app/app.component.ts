import { Component, OnInit } from '@angular/core';

import { BlogService } from './services/blog.service';
import { ProductsService } from './services/products.service';

/**
 * Main root component.
 */
@Component({
  selector: 'sha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Boolean prop.
   * Describes whether the cart is shown or not.
   */
  public showCart = false;

  /**
   * @constructor
   */
  constructor(private productsService: ProductsService, private blogService: BlogService) {}

  /**
   * Shows or hides cart drawer.
   * @param value showCart value
   */
  public showCartDrawer(value: boolean): void {
    this.showCart = value;
  }

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    this.productsService.getCatalog();
    this.blogService.getBlogArticles();
  }
}
