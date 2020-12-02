import { OnDestroy } from '@angular/core';
import { Subject, MonoTypeOperatorFunction, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Symbol of `destroy` subject property.
 */
const destroyProp = Symbol('destroy');

/**
 * Destroyable component decorator.
 * Provides ability to use `takeUntilDestroy` operator for certain component.
 *
 * Authored by Danila Sidorkin.
 */
// tslint:disable-next-line: typedef
export function DestroyableComponent() {
  return <T extends new (...args: any[]) => any>(constructor: T) => {
    return class extends constructor implements OnDestroy {
      /**
       * Destroy event emitter.
       */
      public readonly [destroyProp] = new Subject<void>();

      /**
      * @inheritdoc
      */
      public ngOnDestroy(): void {
        // Call base if exists.
        if (super['ngOnDestroy'] != null) {
          super['ngOnDestroy']();
        }
        this[destroyProp].next();
        this[destroyProp].complete();
      }
    };
  };
}

/**
* Emits the values emitted by the source Observable until a specific component is destroyed.
* @param componentInstance Component instance. Have to be wrapped by the `DestroyableComponent` decorator.
*/
export function takeUntilDestroy<T>(componentInstance: any): MonoTypeOperatorFunction<T> {
  const destroy$ = componentInstance[destroyProp] as Observable<void>;
  if (destroy$ == null) {
    throw new Error('To use the `takeUntilDestroy` operator passed component should be wrapped with `DestroyableComponent` decorator');
  }
  return takeUntil(destroy$);
}
