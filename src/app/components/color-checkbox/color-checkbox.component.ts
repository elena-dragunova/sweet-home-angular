import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Color selector UI component.
 */
@Component({
  selector: 'sha-color-checkbox',
  templateUrl: './color-checkbox.component.html',
  styleUrls: ['./color-checkbox.component.scss'],
})
export class ColorCheckboxComponent {
  /**
   * Color property.
   */
  @Input()
  public color: string;

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
