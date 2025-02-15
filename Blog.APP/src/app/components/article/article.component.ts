import { Input, Component } from '@angular/core';
import { ArticlePreview } from 'src/app/models/article-preview';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() public article!: ArticlePreview;

 
}
