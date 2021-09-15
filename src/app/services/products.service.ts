import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { baseURL } from '../../api';
import { Product } from '../models/product';

/**
 * Products service.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * Products catalog array.
   */
  public productsCatalog$ = new BehaviorSubject<Product[]>([]);

  /**
   * @constructor
   */
  constructor(private readonly http: HttpClient) {}

  /**
   * Gets all products from the catalog.
   * Sets category and subcategory properties to products.
   * Sets productsCatalog$.
   */
  public getCatalog(): void {
    this.http.get(`${baseURL}/catalog/categories.json`)
      .pipe(
        map(products => {
          const currentProducts: Product[] = [];
          Object.entries(products).forEach(([key, category]) => {
            return category.map((sub) => {
              const cat = key;
              return Object.values(sub).map((item: []) => {
                return item.forEach((product: Product) => {

                  currentProducts.push({
                    ...product,
                    category: cat,
                    subcategory: Object.keys(sub)[0],
                  });
                });
              });
            });
          });
          this.productsCatalog$.next(currentProducts);
        }),
      ).subscribe();
  }

  /**
   * Filters products with trending property.
   * @return Products array observable.
   */
  public getTrendingProducts(): Observable<Product[]> {
    return this.productsCatalog$.pipe(map(products => {
      return products.filter(product => product.trending === true);
    }));
  }

  /**
   * Filters products with best-seller property.
   * @return Products array observable.
   */
  public getBestSellers(): Observable<Product[]> {
    return this.productsCatalog$.pipe(map(products => {
      return products.filter(product => product.best_seller === true);
    }));
  }

}
