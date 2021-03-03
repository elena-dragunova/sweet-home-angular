import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

/**
 * BestSellers Products section component.
 */
@Component({
  selector: 'sha-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent implements OnInit {

  /**
   * List of products with best-seller property.
   */
  public bestSellers$: Observable<Product[]>;

  constructor(private productsService: ProductsService) { }

  /**
   * Gets best-sellers from the service to display.
   */
  public ngOnInit(): void {
    this.bestSellers$ = this.productsService.getBestSellers();
  }

}
