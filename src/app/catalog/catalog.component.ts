import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Product } from '../models/product';
import { CatalogFilteringService } from '../services/catalog-filtering.service';
import { ProductsService } from '../services/products.service';
import { DestroyableComponent, takeUntilDestroy } from '../utils/destroyable';

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
  /**
   * Current url array.
   */
  public url$ = this.router.url.split('/');

  /**
   * Current products' categories.
   */
  public categories$: Observable<string[]>;

  /**
   * Filtered products to display.
   */
  public filteredProducts$: Observable<Product[]>;

  /**
   * @constructor
   */
  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
    private readonly catalogFilteringService: CatalogFilteringService
  ) { }

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    this.onRouteChange();
    this.router.events.pipe(
      takeUntilDestroy(this),
      filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url$ = event.url.split('/');
        this.onRouteChange();
      });
  }

  private onRouteChange(): void {
    this.catalogFilteringService.clearAllFilters();
    this.catalogFilteringService.setCategoriesAndProducts(this.url$);
    this.categories$ = this.catalogFilteringService.getCurrentCategories();
    this.filteredProducts$ = this.catalogFilteringService.filteredProducts$;
  }
}
