import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CatalogFilteringService} from '../../services/catalog-filtering.service';

@Component({
  selector: 'sha-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss'],
})
export class ColorFilterComponent implements OnInit {

  public colorOptions$: Observable<string[]>;

  constructor(private readonly catalogFilteringSeervice: CatalogFilteringService) { }

  ngOnInit(): void {
    this.colorOptions$ = this.catalogFilteringSeervice.currentColors$;
  }

}
