import { Component, Input } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Dropdown UI component.
 */
@Component({
  selector: 'sha-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  /**
   * Title of the dropdown.
   */
  @Input() public title: string;
  /**
   * Link path.
   */
  @Input() public to: string;
  /**
   * Inner menu items of the dropdown.
   */
  @Input() public listItems: [{
    /**
     * Title of the inner link.
     */
    title: string,
    /**
     * Path of the inner link.
     */
    to: string,
  }];
  /**
   * Describes whether the dropdown is open or not.
   */
  public isOpen = false;

  /**
   * FontAwesome ChevronUp icon.
   */
  public faChevronUp = faChevronUp;
  /**
   * FontAwesome ChevronDown icon.
   */
  public faChevronDown = faChevronDown;

  constructor() { }

  /**
   * Opens dropdown menu.
   */
  public openList(): void {
    this.isOpen = true;
  }

  /**
   * Closes dropdown menu.
   */
  public closeList(): void {
    this.isOpen = false;
  }
}
