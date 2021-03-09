import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { DestroyableComponent, takeUntilDestroy } from '../../utils/destroyable';

/**
 * Title section component.
 */
@Component({
  selector: 'sha-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss'],
})
@DestroyableComponent()
export class TitleSectionComponent implements OnInit {

  constructor(private router: Router) {}

  /**
   * Category title.
   */
  public categoryTitle$ = TitleSectionComponent.getCategoryTitle(this.router.url);

  /**
   * Category specified image.
   */
  public categoryImage$ = TitleSectionComponent.chooseCatalogImage(this.categoryTitle$);

  private static chooseCatalogImage(title: string): string {
    switch (title) {
      case 'textiles':
        return 'https://cdn.pixabay.com/photo/2017/08/14/15/17/pillow-2640807_960_720.png';
      case 'decorations':
        return 'https://cdn.pixabay.com/photo/2017/06/23/22/37/buddha-2436187_960_720.png';
      case 'sofas':
        return 'https://cdn.pixabay.com/photo/2017/07/24/17/18/sofa-2535448_960_720.png';
      case 'chairs':
        return 'https://cdn.pixabay.com/photo/2019/03/21/03/29/chair-4070161_960_720.png';
      case 'cupboards':
        return 'https://cdn.pixabay.com/photo/2014/12/21/23/51/cupboard-576195_960_720.png';
      case 'vases':
        return 'https://cdn.pixabay.com/photo/2019/12/01/23/39/flowers-4666664_960_720.png';
      case 'kitchen_textiles':
        return 'https://cdn.pixabay.com/photo/2016/08/15/11/20/towel-1595087_960_720.png';
      default:
        return 'https://cdn.pixabay.com/photo/2017/08/19/02/58/sofa-2657172_960_720.png';
    }
  }

  private static getCategoryTitle(url: string): string {
    const arr = url.split('/');
    return arr[arr.length - 1];
  }

  /**
   * Set category title and image after init.
   * Subscribe to navigation changes for update.
   */
  public ngOnInit(): void {
    this.router.events.pipe(
      takeUntilDestroy(this),
      filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.categoryTitle$ = TitleSectionComponent.getCategoryTitle(event.url);
        this.categoryImage$ = TitleSectionComponent.chooseCatalogImage(this.categoryTitle$);
      });

  }
}
