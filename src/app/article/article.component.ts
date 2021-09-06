import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  date = new Date();
  articles?:Article[];
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(data=>{
      this.articles=data;
    })
  }

  createArticles(article:Article){
    this.articleService.createArticles(article);
    window.location.reload();
  }

  updateArticlesForm(article:Article, id:number)
  {
      this.articleService.updateArticles(article, id);
      window.location.reload();
  }

  deleteArticle(id:number)
  {
      this.articleService.deleteArticle(id);
      window.location.reload();
  }

}
