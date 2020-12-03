import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Promo section component.
 */
@Component({
  selector: 'sha-promo-section',
  templateUrl: './promo-section.component.html',
  styleUrls: ['./promo-section.component.scss'],
})
export class PromoSectionComponent {
  /**
   * FontAwesome ChevronRight icon.
   */
  public faChevronRight = faChevronRight;

  constructor() { }
}
