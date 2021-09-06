import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from '../models/cards';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CardService {



  constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44360/api/";


  getCards(): Observable<Cards[]> {
    return this.httpClient.get<Cards[]>(this.path + "Cards");
  }

  createCards(card:Cards)
  {
      this.httpClient.post(this.path + 'Cards', card).subscribe(data => {
          let l =< Cards > JSON.parse(JSON.stringify(data));
      });
  }

  updateCards(card:Cards,id:number){
    this.httpClient.put(this.path+'Cards/'+id,card).subscribe(data=>{
      let l=<Cards>JSON.parse(JSON.stringify(data));
    });
  }

  deleteCard(id:number){
    this.httpClient.delete(this.path+'Cards/'+id).subscribe();
  }
}
