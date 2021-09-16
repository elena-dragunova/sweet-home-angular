import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product';
import { DestroyableComponent, takeUntilDestroy } from '../utils/destroyable';

import { ProductsService } from './products.service';

const CATEGORY_INDEX_IN_ROUTE = 2;
const SUBCATEGORY_INDEX_IN_ROUTE = 3;

/**
 * Service for catalog's filtering.
 */
@Injectable({
  providedIn: 'root',
})
@DestroyableComponent()
export class CatalogFilteringService {
  /**
   * Current filtered products.
   */
  public filteredProducts$ = new BehaviorSubject([]);

  /**
   * Current catalog category.
   */
  public currentCategory: string = null;

  /**
   * Current catalog subcategory.
   */
  public currentSubCategory: string = null;

  /**
   * Current category's not-filtered products.
   */
  public currentCategoryProducts$ = new BehaviorSubject([]);

  private currentCategoryFilters = [];
  private currentColorFilters = [];
  private currentPriceFilters = [];

  /**
   * @constructor
   */
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Changes current category filters.
   * @param categories Current products' categories
   * @param index Category index
   * @param value Category filter value
   */
  public onCategoriesChange(categories: string[], index: number, value: boolean): void {
    const changedCategoryFilter = categories[index];
    if (value) {
      this.currentCategoryFilters.push(changedCategoryFilter);
    } else {
      const catIndex = this.currentCategoryFilters.findIndex(cat => cat === changedCategoryFilter);
      this.currentCategoryFilters.splice(catIndex, 1);
    }
    this.filterProducts();
  }

  /**
   * Changes current color filters.
   */
  public onColorsChange() {}

  /**
   * Changes current price filters.
   */
  public onPricesChange() {}

  /**
   * Clear all filters.
   */
  public clearAllFilters(): void {
    this.currentCategoryFilters = [];
    this.currentColorFilters = [];
    this.currentPriceFilters = [];
  }

  /**
   * Filter product by all current filters.
   */
  private filterProducts(): void {
    this.filteredProducts$.next([]);
  }

  /**
   * Sets current category and current category products
   * @param url Current url array
   */
  public setCategoriesAndProducts(url: string[]): void {
    this.currentCategory = url[CATEGORY_INDEX_IN_ROUTE] || null;
    this.currentSubCategory = url[SUBCATEGORY_INDEX_IN_ROUTE] || null;
    this.getCurrentCategoryProducts().pipe(
      takeUntilDestroy(this),
      map(products => {
        this.currentCategoryProducts$.next(products);
        this.filteredProducts$.next(products);
      }),
    ).subscribe();
  }

  /**
   * Get current category and subcategory.
   */
  public getCurrentCategories(): Observable<string[]> {
    if (!this.currentCategory) {
      return this.currentCategoryProducts$.pipe(
        takeUntilDestroy(this),
        map((products) => {
          return [... new Set(products.map((product) => {
            return product.category;
          }))];
        }));
    }

    if (this.currentSubCategory) {
      return null;
    }

    return this.currentCategoryProducts$.pipe(
      takeUntilDestroy(this),
      map((products) => {
        return [... new Set(products.map((product) => {
          return product.subcategory;
        }))];
      }));
  }

  /**
   * Changes current category products.
   */
  private getCurrentCategoryProducts(): Observable<Product[]> {
    const currentCategoryProducts$ = this.productsService.productsCatalog$.pipe(
      takeUntilDestroy(this),
      map((products) => {
        if (!this.currentCategory) {
          return products;
        }

        return products.filter((product) => {
          return product.category === this.currentCategory;
        });
      }));
    if (!this.currentSubCategory) {
      return currentCategoryProducts$;
    }

    return currentCategoryProducts$.pipe(
      takeUntilDestroy(this),
      map((products) => {
        return products.filter((product) => {
          return product.subcategory === this.currentSubCategory;
        });
      }));
  }
}
