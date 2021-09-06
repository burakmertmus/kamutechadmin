import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44360/api/";

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.path + "Articles");
  }

  createArticles(article:Article){
    this.httpClient.post(this.path+'Articles',article).subscribe(data=>{
      let l=<Article>JSON.parse(JSON.stringify(data));
    });
  }

  
  updateArticles(article:Article,id:number){
    this.httpClient.put(this.path+'Articles/'+id,article).subscribe(data=>{
      let l=<Article>JSON.parse(JSON.stringify(data));
    });
  }

  deleteArticle(id:number){
    this.httpClient.delete(this.path+'Articles/'+id).subscribe();
  }


}


