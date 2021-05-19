import { Component, Input } from '@angular/core';

/**
 * Catalog filters component.
 */
@Component({
  selector: 'sha-catalog-filter',
  templateUrl: './catalog-filter.component.html',
  styleUrls: ['./catalog-filter.component.scss'],
})
export class CatalogFilterComponent {
  /**
   * Current products' categories.
   */
  @Input() public categories: string[];

  constructor() { }
}
