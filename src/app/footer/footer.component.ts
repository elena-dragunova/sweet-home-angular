import { Component } from '@angular/core';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarker = faMapMarker;

  constructor() { }

}