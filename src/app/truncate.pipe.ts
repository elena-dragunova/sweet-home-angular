import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe for truncating text.
 */
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  /**
   * Truncate text method.
   */
  public transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
