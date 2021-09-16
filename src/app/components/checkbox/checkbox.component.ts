import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Checkbox UI component.
 */
@Component({
  selector: 'sha-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  /**
   * Label.
   */
  @Input()
  public label;

  /**
   * Checkbox id.
   */
  @Input()
  public id;

  /**
   * On checkbox changed event emitter.
   */
  @Output()
  public checkboxChanged = new EventEmitter();

  /**
   * Emits value and id of checkbox changed.
   * @param event Checkbox change event.
   */
  public onChange(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    const value = target.checked;
    this.checkboxChanged.emit(value);
  }

}
