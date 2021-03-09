import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import {DestroyableComponent, takeUntilDestroy} from '../utils/destroyable';

/**
 * Catalog pages main component.
 */
@Component({
  selector: 'sha-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
@DestroyableComponent()
export class CatalogComponent implements OnInit {

  private allProducts$: Observable<Product[]>;

  public categories: Observable<string[]>;
  public colors: string[];

  constructor(private productsService: ProductsService) { }

  public ngOnInit(): void {
    this.allProducts$ = this.productsService.getCatalog();
    this.categories = this.allProducts$.pipe(
      takeUntilDestroy(this),
      map(products => {
        return products.map(product => {
          return product.category;
        });
      }),
    );
  }
}
