import { Component, Input } from '@angular/core';

/**
 * Logo UI component.
 */
@Component({
  selector: 'sha-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  /**
   * Color of the Logo.
   */
  @Input() public color: string;

  constructor() { }

}
