import { Component, Input } from '@angular/core';
import { faFacebookF, faTwitter, faInstagramSquare, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {
  @Input() color: string;

  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faInstagramm = faInstagramSquare;
  faPinterest = faPinterest;

  constructor() { }
}
