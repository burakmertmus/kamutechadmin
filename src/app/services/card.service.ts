import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CardsDto } from '../dtos/CardsDto';
import { CardUpdateDto } from '../dtos/CardUpdateDto';
import { AlertifyService } from './alertify.service';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient:HttpClient,private alertifyService:AlertifyService) { }
  path = "https://localhost:44360/api/";


  getCards(): Observable<CardsDto[]> {
    return this.httpClient.get<CardsDto[]>(this.path + "Cards");
  }

  createCards(card:CardsDto)
  {
      this.httpClient.post(this.path + 'Cards', card).subscribe(data => {
          let l =< CardsDto > JSON.parse(JSON.stringify(data));
      });
  }

  updateCards(card:CardUpdateDto,id:number){
    this.httpClient.put(this.path+'Cards/'+id,card).subscribe(data=>{
      let l=<CardUpdateDto>JSON.parse(JSON.stringify(data));
      console.log(card);
    });
    this.alertifyService.success("Card updated succes");
  }

  deleteCard(id:number){
    this.httpClient.delete(this.path+'Cards/'+id).subscribe();
  }
}
