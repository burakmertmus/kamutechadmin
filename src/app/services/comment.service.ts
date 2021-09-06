import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44360/api/";

  getComments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(this.path + "Comments");
  }

  createComments(comment:Comment)
  {
      this.httpClient.post(this.path + 'Comments', comment).subscribe(data => {
          let l =< Comment > JSON.parse(JSON.stringify(data));
      });
  }


  updateComments(comment:Comment,id:number){
    this.httpClient.put(this.path+'Comments/'+id,comment).subscribe(data=>{
      let l=<Comment>JSON.parse(JSON.stringify(data));
    });
  }

  deleteComment(id:number){
    this.httpClient.delete(this.path+'Comments/'+id).subscribe();
  }

}
