import { Component, Input } from '@angular/core';

/**
 * Button UI component.
 */
@Component({
  selector: 'sha-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Text content of the button.
   */
  @Input() public text: string;

  /**
   * Button style.
   * Can be MainButton, AccentButton, WhiteButton.
   */
  @Input() public buttonStyle: string;

  /**
   * Whether the button is disabled or not.
   * Has default false value.
   */
  @Input() public disabled = false;

  /**
   * Type of the button
   * Has default value: button.
   */
  @Input() public type = 'button';

  constructor() { }
}
