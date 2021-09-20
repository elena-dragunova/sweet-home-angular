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
  public filteredProducts$ = new BehaviorSubject<Product[]>([]);

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
  public currentCategoryProducts$ = new BehaviorSubject<Product[]>([]);

  /**
   * Current category's products colors.
   */
  public currentColors$ = new BehaviorSubject<string[]>([]);

  /**
   * Possible price ranges.
   */
  public priceRanges = [
    [0, 20],
    [20, 50],
    [50, 100],
    [100, 1000],
  ];

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
   * @param index Color index
   * @param value Color filter value
   */
  public onColorsChange(index: number, value: boolean): void {
    this.currentColors$.pipe(
      takeUntilDestroy(this),
      map(options => {
        const changedColorOption = options[index];
        if (value) {
          this.currentColorFilters.push(changedColorOption);
        } else {
          const colorIndex = this.currentColorFilters.findIndex(color => color === changedColorOption);
          this.currentColorFilters.splice(colorIndex, 1);
        }
        this.filterProducts();
      }),
    ).subscribe();
  }

  /**
   * Changes current price filters.
   */
  public onPricesChange(index: number, value: boolean): void {
    const currentPricesRange = this.priceRanges[index];
    if (value) {
      this.currentPriceFilters.push(currentPricesRange);
    } else {
      const currentPriceOptionIndex = this.currentPriceFilters.findIndex(prices => prices === currentPricesRange);
      this.currentPriceFilters.splice(currentPriceOptionIndex, 1);
    }
    this.filterProducts();
  }

  /**
   * Clear all filters.
   */
  public clearAllFilters(): void {
    this.currentCategoryFilters = [];
    this.currentColorFilters = [];
    this.currentPriceFilters = [];
  }

  /**
   * Filter products by category.
   */
  private filterProductsByCategory(): Product[] {
    const filteredByCategory: Product[] = [];

    this.currentCategoryProducts$.pipe(
      takeUntilDestroy(this),
      map(products => {
        if (!this.currentCategoryFilters.length) {
          products.forEach(product => filteredByCategory.push(product));
        } else if (!this.currentCategory) {
          this.currentCategoryFilters.forEach(filter => {
            products.forEach(product => {
              if (product.category === filter) {
                filteredByCategory.push(product);
              }
            });
          });
        } else {
          this.currentCategoryFilters.forEach(filter => {
            products.forEach(product => {
              if (product.subcategory === filter) {
                filteredByCategory.push(product);
              }
            });
          });
        }
      }),
    ).subscribe();

    return filteredByCategory;
  }

  /**
   * Filter products by color.
   */
  private filterProductsByColor(): Product[] {
    const filteredByColor: Product[] = [];

    this.currentCategoryProducts$.pipe(
      takeUntilDestroy(this),
      map(products => {
        if (!this.currentColorFilters.length) {
          products.forEach(product => filteredByColor.push(product));
        } else {
          this.currentColorFilters.forEach(filter => {
            products.forEach(product => {
              const productHasFilterColor = product.options.some(option => option.color === filter);
              const productIsNotFilteredYet = filteredByColor.indexOf(product) === -1;
              if (productHasFilterColor && productIsNotFilteredYet) {
                filteredByColor.push(product);
              }
            });
          });
        }
      }),
    ).subscribe();

    return filteredByColor;
  }

  /**
   * Filter products by prices.
   */
  private filterProductsByPrices(): Product[] {
    const filteredByPrices: Product[] = [];

    this.currentCategoryProducts$.pipe(
      takeUntilDestroy(this),
      map(products => {
        if (!this.currentPriceFilters.length) {
          products.forEach(product => filteredByPrices.push(product));
        } else {
          this.currentPriceFilters.forEach(filter => {
            products.forEach(product => {
              if (product.price >= filter[0] && product.price <= filter[1]) {
                filteredByPrices.push(product);
              }

            });
          });
        }
      }),
    ).subscribe();

    return filteredByPrices;
  }

  /**
   * Filter product by all current filters.
   */
  private filterProducts(): void {
    const filteredByCategory = this.filterProductsByCategory();
    const filteredByColor = this.filterProductsByColor();
    const filteredByPrices = this.filterProductsByPrices();

    const filteredProducts = [];
    filteredByCategory.forEach(product => {
      const alsoFilteredByColor = filteredByColor.indexOf(product) >= 0;
      const alsoFilteredByPrices = filteredByPrices.indexOf(product) >= 0;
      if (alsoFilteredByColor && alsoFilteredByPrices) {
        filteredProducts.push(product);
      }
    });
    this.filteredProducts$.next(filteredProducts);
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

  /**
   * Get current products' colors.
   */
  public setCurrentColors(): void {
    this.currentCategoryProducts$.pipe(
      takeUntilDestroy(this),
      map((products) => {
        const colors: string[] = [];

        products.forEach((product) => {
          product.options.forEach(option => {
            colors.push(option.color);
          });
        });
        return colors;
      })).subscribe(colorOptions => {
      const colorOptionsUnique = [...new Set(colorOptions)];
      this.currentColors$.next(colorOptionsUnique);
    });
  }
}
