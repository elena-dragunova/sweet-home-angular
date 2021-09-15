import { Component } from '@angular/core';

/**
 * Main Menu component for Header.
 */
@Component({
  selector: 'sha-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  /**
   * Menu items array with internal links.
   */
  public menuItems = [
    {
      title: 'Home',
      to: '',
    },
    {
      title: 'Catalog',
      to: 'catalog',
      items: [
        {
          id: 0,
          title: 'Furniture',
          to: 'catalog/furniture',
        },
        {
          id: 1,
          title: 'Decorations',
          to: 'catalog/decorations',
        },
        {
          id: 2,
          title: 'Home Textiles',
          to: 'catalog/textiles',
        },
      ],
    },
    {
      title: 'Furniture',
      to: 'catalog/furniture',
      items: [
        {
          id: 0,
          title: 'Chairs',
          to: 'catalog/furniture/chairs',
        },
        {
          id: 1,
          title: 'Sofas',
          to: 'catalog/furniture/sofas',
        },
        {
          id: 2,
          title: 'Cupboards',
          to: 'catalog/furniture/cupboards',
        },
      ],
    },
    {
      title: 'Blog',
      to: 'blog',
    },
    {
      title: 'Contact Us',
      to: 'contacts',
    },
  ];
}
