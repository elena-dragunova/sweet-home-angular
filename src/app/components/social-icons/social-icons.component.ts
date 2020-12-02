import { Component, Input } from '@angular/core';
import { faFacebookF, faTwitter, faInstagramSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';

/**
 * Social Links component.
 */
@Component({
  selector: 'sha-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent {
  /**
   * Color of social icons.
   */
  @Input() public color: string;

  /**
   * FontAwesome Facebook icon.
   */
  public faFacebook = faFacebookF;
  /**
   * FontAwesome Twitter icon.
   */
  public faTwitter = faTwitter;
  /**
   * FontAwesome Instagramm icon.
   */
  public faInstagramm = faInstagramSquare;
  /**
   * FontAwesome Pinterest icon.
   */
  public faPinterest = faPinterest;

  constructor() { }
}
