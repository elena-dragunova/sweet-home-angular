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
  public id: string;

  /**
   * Background color for active state.
   */
  @Input()
  public activeColor;

  /**
   * On checkbox changed event emitter.
   */
  @Output()
  public checkboxChanged = new EventEmitter();

  /**
   * Emits value of checkbox changed.
   * @param event Checkbox change event.
   */
  public onChange(event: Event): void {
    const target = event.currentTarget as HTMLInputElement;
    const value = target.checked;
    this.checkboxChanged.emit(value);
  }

  /**
   * Emits value of checkbox changed.
   */
  public getActiveClass(): string {
    switch (this.activeColor) {
      case 'gold':
        return 'gold';
      case 'black':
        return 'black';
      default:
        return 'black';
    }
  }

}
