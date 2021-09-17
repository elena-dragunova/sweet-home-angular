import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {CatalogFilteringService} from '../../services/catalog-filtering.service';

@Component({
  selector: 'sha-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss'],
})
export class ColorFilterComponent implements OnInit {
  /**
   * Filtering categories changed.
   */
  @Output()
  public colorsChanged = new EventEmitter();

  public colorOptions$: Observable<string[]>;

  constructor(private readonly catalogFilteringService: CatalogFilteringService) { }

  ngOnInit(): void {
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

}
