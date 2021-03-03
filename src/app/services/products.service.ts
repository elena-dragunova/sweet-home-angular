import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private http: HttpClient) {}

  /**
   * Gets all products from the catalog.
   * Sets category and subcategory properties to products.
   * Returns products array.
   */
  public getCatalog(): Observable<Product[]> {
    return this.http.get(`${baseURL}/catalog/categories.json`)
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
          return currentProducts;
        }),
      );
  }

  /**
   * Filters products with trending property.
   * Returns products array,
   */
  public getTrendingProducts(): Observable<Product[]> {
    return this.getCatalog().pipe(map(products => {
      return products.filter(product => product.trending === true);
    }));
  }

  /**
   * Filters products with best-seller property.
   * Returns products array,
   */
  public getBestSellers(): Observable<Product[]> {
    return this.getCatalog().pipe(map(products => {
      return products.filter(product => product.best_seller === true);
    }));
  }

}
