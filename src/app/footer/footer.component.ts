import { Component } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor() { }

}
