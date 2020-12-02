import {Component, Input } from '@angular/core';

/**
 * Badge UI component.
 */
@Component({
  selector: 'sha-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  /**
   * Inner text for the Badge component.
   */
  @Input() public text: string;

  constructor() { }
}
