import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlePreview } from 'src/app/models/article-preview';
import { ArticlesAPIService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesAPIService]
})
export class ArticlesComponent implements OnInit, OnDestroy {

  public Articles!: ArticlePreview[];

  constructor(private readonly articlesAPIServise: ArticlesAPIService){}

  ngOnInit() {
    console.log('OnInit');

    this.articlesAPIServise.getAllArticles().subscribe(
      (r) => this.Articles = r);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy'); 
  }

}
