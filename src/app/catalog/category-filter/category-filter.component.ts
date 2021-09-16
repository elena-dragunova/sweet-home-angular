import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Filtering component.
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
   * On changed filtering categories.
   * @param value Checkbox value
   * @param index Index of changed category
   */
  public onCategoriesChange(value: boolean, index: number): void {
    console.log('cat');
    console.log(index);
    console.log(value);
  }

}
