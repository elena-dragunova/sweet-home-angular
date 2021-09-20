import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { CatalogFilteringService } from '../../services/catalog-filtering.service';

/**
 * Color filter component.
 */
@Component({
  selector: 'sha-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss'],
})
export class ColorFilterComponent implements OnInit {
  /**
   * Filtering colors changed.
   */
  @Output()
  public colorsChanged = new EventEmitter();

  /**
   * Color possible options for the current category.
   */
  public colorOptions$: Observable<string[]>;

  /**
   * @constructor
   */
  constructor(private readonly catalogFilteringService: CatalogFilteringService) { }

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    this.colorOptions$ = this.catalogFilteringService.currentColors$;
  }

  /**
   * On changed filtering colors.
   * @param value Checkbox value
   * @param index Index of changed color option
   */
  public onColorsChange(value: boolean, index: number): void {
    this.catalogFilteringService.onColorsChange(index, value);
  }

  /**
   * Tracking function.
   * @param index Item index
   * @param color Item name
   */
  public trackByColors(index: number, color: string): string {
    return `${color}-${index}`;
  }
}
