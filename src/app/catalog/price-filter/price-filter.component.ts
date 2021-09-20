import {Component, EventEmitter, Output} from '@angular/core';
import {CatalogFilteringService} from '../../services/catalog-filtering.service';

/**
 * Price filter component.
 */
@Component({
  selector: 'sha-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent {
  /**
   * Filtering prices changed.
   */
  @Output()
  public colorsChanged = new EventEmitter();

  /**
   * Possible price ranges.
   */
  public priceRanges = this.catalogFilteringService.priceRanges;

  /**
   * @constructor
   */
  constructor(private readonly catalogFilteringService: CatalogFilteringService) {}

  /**
   * Get label for proces range.
   * @param price Prices range
   */
  public getPriceString(price: number[]): string {
    return `$${price[0]} - $${price[1]}`;
  }

  /**
   * On changed filtering prices.
   * @param value Checkbox value
   * @param index Index of changed prices option
   */
  public onPricesChange(value: boolean, index: number): void {
    console.log('price changes');
    this.catalogFilteringService.onPricesChange(index, value);
  }

  /**
   * Tracking function.
   * @param index Item index
   * @param prices Item name
   */
  public trackByPrices(index: number, prices: number[]): number {
    return index;
  }
}
