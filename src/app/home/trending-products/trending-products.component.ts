import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

/**
 * Trending Products section component.
 */
@Component({
  selector: 'sha-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss'],
})
export class TrendingProductsComponent implements OnInit {
  /**
   * List of products with trending property.
   */
  public trendingProducts$: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  /**
   * Gets trending products from the service to display.
   */
  public ngOnInit(): void {
    this.trendingProducts$ = this.productsService.getTrendingProducts();
  }

}
