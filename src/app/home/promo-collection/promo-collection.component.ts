import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Promo collection component.
 */
@Component({
  selector: 'sha-promo-collection',
  templateUrl: './promo-collection.component.html',
  styleUrls: ['./promo-collection.component.scss'],
})
export class PromoCollectionComponent {
  /**
   * FontAwesome ChevronRight icon.
   */
  public faChevronRight = faChevronRight;
}
