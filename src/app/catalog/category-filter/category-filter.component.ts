import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sha-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  @Input() public categories;

  constructor() { }

  ngOnInit(): void {
  }

}
