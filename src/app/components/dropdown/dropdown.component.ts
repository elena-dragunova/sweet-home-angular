import {Component, Input, OnInit} from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() title: string;
  @Input() to: string;
  @Input() listItems: [{title: string, to: string}];
  isOpen = false;

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  openList(): void {
    this.isOpen = true;
  }

  closeList(): void {
    this.isOpen = false;
  }
}
