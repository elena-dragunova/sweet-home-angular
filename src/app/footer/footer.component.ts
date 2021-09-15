import { Component } from '@angular/core';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

/**
 * Footer component.
 */
@Component({
  selector: 'sha-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  /**
   * FontAwesome Envelope icon.
   */
  public faEnvelope = faEnvelope;
  /**
   * FontAwesome Phone icon.
   */
  public faPhone = faPhone;
  /**
   * FontAwesome MapMarker icon.
   */
  public faMapMarker = faMapMarker;
}
