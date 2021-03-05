import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { baseURL } from '../../api';
import { Article } from '../models/article';

/**
 * Blog service.
 */
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  /**
   * Gets all articles from the server.
   * Returns articles array.
   */
  public getBlogArticles(): Observable<Article[]> {
    return this.http.get(`${baseURL}/blog.json`)
      .pipe(
        map((articles: Article[]) => {
          const allArticles = [];
          Object.values(articles).map((category) => {
            return Object.values(category).map((item) => {
              return item.forEach(article => {
                allArticles.push(article);
              });
            });
          });
          return allArticles;
        }),
      );
  }

  /**
   * Gets lst three articles from the server to display on Home page.
   * Returns articles array.
   */
  public getLastThreeArticles(): Observable<Article[]> {
    return this.getBlogArticles().pipe(
      map((articles: Article[]) => {
        const sortedArticles = articles.sort((a, b) => {
          return b.date - a.date;
        });

        let lastArticles;
        if (sortedArticles.length >= 3) {
          lastArticles = sortedArticles.slice(0, 3);
        } else {
          lastArticles = sortedArticles;
        }
        return lastArticles;
      }),
    );
  }
}
