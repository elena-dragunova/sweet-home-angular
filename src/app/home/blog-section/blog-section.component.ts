import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Article } from '../../models/article';
import { BlogService } from '../../services/blog.service';

/**
 * Last articles section component.
 */
@Component({
  selector: 'sha-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
})
export class BlogSectionComponent implements OnInit {
  /**
   * List of last articles of the blog.
   */
  public lastArticles$: Observable<Article[]>;

  /**
   * @constructor
   */
  constructor(private readonly blogService: BlogService) { }

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    this.lastArticles$ = this.blogService.getLastThreeArticles();
  }
}
