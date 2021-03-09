import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

class ObjectUrl {
  /**
   * Path to redirect.
   */
  public path: string;

  /**
   * Title to display.
   */
  public name: string;
}

/**
 * Breadcrumbs UI component.
 */
@Component({
  selector: 'sha-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router ) { }

  /**
   * Urls array for breadcrumbs.
   */
  public urls$ = this.mapUrlObject(this.router.url);

  private mapUrlObject(url: string): ObjectUrl[] {
    return url.split('/').map((urlStr, index) => {
      const endOfThePath = this.router.url.indexOf(urlStr) + urlStr.length;
      const path = url.substr(0, endOfThePath);
      const name = index === 0 ? 'Home' : urlStr;

      return {
        path,
        name,
      };
    });
  }

  /**
   * Get current url.
   */
  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.urls$ = this.mapUrlObject(event.url);
      });

  }
}
