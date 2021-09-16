import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { DestroyableComponent, takeUntilDestroy } from '../utils/destroyable';

const CATEGORY_INDEX_IN_ROUTE = 2;
const SUBCATEGORY_INDEX_IN_ROUTE = 3;

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
   * Current catalog category.
   */
  public currentCategory: string = null;

  /**
   * Current catalog subcategory.
   */
  public currentSubCategory: string = null;

  /**
   * Current products' categories.
   */
  public categories$: Observable<string[]>;

  /**
   * All possible colors.
   */
  public colors: string[];

  /**
   * Current category's not-filtered products.
   */
  public currentCategoryProducts$: Observable<Product[]>;

  /**
   * Filtered products to display.
   */
  public filteredProducts$: Observable<Product[]>;

  constructor(private productsService: ProductsService, private router: Router) { }

  /**
   * Init properties.
   */
  public ngOnInit(): void {
    this.setCategoriesAndProducts();
    this.router.events.pipe(
      takeUntilDestroy(this),
      filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url$ = event.url.split('/');
        this.setCategoriesAndProducts();
      });
  }

  private setCategoriesAndProducts(): void {
    this.currentCategory = this.url$[CATEGORY_INDEX_IN_ROUTE] || null;
    this.currentSubCategory = this.url$[SUBCATEGORY_INDEX_IN_ROUTE] || null;
    this.currentCategoryProducts$ = this.getCurrentCategoryProducts();
    this.filteredProducts$ = this.currentCategoryProducts$;
    this.categories$ = this.getCurrentCategories();
  }

  private getCurrentCategories(): Observable<string[]> {
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
