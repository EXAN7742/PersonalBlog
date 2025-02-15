import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
    { path: "", component: ArticlesComponent},
    { path: "about", component: AboutComponent},
    { path: "article", component: ArticleComponent},
    { path: "add-recipe", component: RecipeComponent},
    { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
