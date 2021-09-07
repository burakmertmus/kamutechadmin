import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleService } from '../services/article.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
