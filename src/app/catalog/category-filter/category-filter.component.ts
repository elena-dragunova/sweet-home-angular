import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CatalogFilteringService } from '../../services/catalog-filtering.service';

/**
 * Category filter component.
 */
@Component({
  selector: 'sha-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  /**
   * Categories to filter.
   */
  @Input()
  public categories;

  /**
   * Filtering categories changed.
   */
  @Output()
  public categoriesChanged = new EventEmitter();

  /**
   * @constructor
   */
  constructor(private readonly catalogFilteringService: CatalogFilteringService) {}

  /**
   * On changed filtering categories.
   * @param value Checkbox value
   * @param index Index of changed category
   */
  public onCategoriesChange(value: boolean, index: number): void {
    this.catalogFilteringService.onCategoriesChange(this.categories, index, value);
  }

  /**
   * Tracking function.
   * @param index Item index
   * @param category Item name
   */
  public trackByCategory(index: number, category: string): string {
    return `${category}-${index}`;
  }

}
