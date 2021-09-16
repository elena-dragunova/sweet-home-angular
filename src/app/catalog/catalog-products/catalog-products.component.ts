import {Component, Input} from '@angular/core';
import {Product} from '../../models/product';

/**
 * Catalog Filtered Products component.
 */
@Component({
  selector: 'sha-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss'],
})
export class CatalogProductsComponent {
  @Input()
  public filteredProducts: Product[];

  constructor() { }
}
