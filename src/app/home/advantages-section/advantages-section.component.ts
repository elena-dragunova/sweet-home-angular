import { Component } from '@angular/core';
import { faChevronRight, faPaperPlane, faCreditCard, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * Advantages section component.
 */
@Component({
  selector: 'sha-advantages-section',
  templateUrl: './advantages-section.component.html',
  styleUrls: ['./advantages-section.component.scss'],
})
export class AdvantagesSectionComponent {

  /**
   * FontAwesome ChevronRight icon.
   */
  public faChevronRight = faChevronRight;

  /**
   * FontAwesome PaperPlane icon.
   */
  public faPaperPlane = faPaperPlane;

  /**
   * FontAwesome CreditCard icon.
   */
  public faCreditCard = faCreditCard;

  /**
   * FontAwesome UndoAlt icon.
   */
  public faUndoAlt = faUndoAlt;
}
