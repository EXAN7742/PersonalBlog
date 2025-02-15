import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlePreview } from '../models/article-preview';
import { HttpService } from './http.service';
import { filter, map, tap, finalize } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Injectable()
export class ArticlesAPIService {
  constructor(private readonly httpService: HttpService) {}

  public getAllArticles(): Observable<ArticlePreview[]> {
    return this.httpService.get('http://localhost:21899/api/articles').pipe(
      map((res: any) => {
        const data = res.map((obj: any) => ({
          Id: obj.id,
          Title: obj.title,
          Description: obj.description,
        }));
        return data;
      }),
      map((a) => a.filter((x:any) => x.Id >= 1)),
      tap((res) => console.log(res)) ,
      finalize(() => console.log('Sequence complete'))
    );
  }
}
