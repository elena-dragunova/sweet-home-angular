import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * Subscription form.
 */
@Component({
  selector: 'sha-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent {

  constructor() { }

  /**
   * Submit event handler.
   */
  public onSubmit(form: NgForm): void {
    console.log(form);
  }
}
