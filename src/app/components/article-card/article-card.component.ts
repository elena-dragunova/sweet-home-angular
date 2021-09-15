import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Article } from '../../models/article';

/**
 * Article Card common component.
 */
@Component({
  selector: 'sha-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  /**
   * Article of the current card.
   */
  @Input()
  public article: Article;

  /**
   * FontAwesome ChevronRight icon.
   */
  public faChevronRight = faChevronRight;

  /**
   * Date of article.
   */
  public date;

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    this.date = new Date(this.article.date * 1000);
  }
}
