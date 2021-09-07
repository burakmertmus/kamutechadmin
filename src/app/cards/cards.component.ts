import { Component, OnInit } from '@angular/core';
import { CardsDto } from '../dtos/CardsDto';
import { CardUpdateDto } from '../dtos/CardUpdateDto';
import { Cards } from '../models/cards';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  

  constructor(private cardService:CardService) { }
  cardsdto:CardsDto[];
  cardsUpdateModel:CardUpdateDto={photoUrl:"",content:"",header:""};
  std:boolean=false;
  ngOnInit()
  {
    this.std=true;
    if(this.std)
    {
      this.cardService.getCards().subscribe(data => {
        this.cardsdto = data;
      })
    }
    
  }

  fillModalForm(id:number): void {
     this.cardsUpdateModel.photoUrl=this.cardsdto.find(x=>x.id == id).photoUrl;
     this.cardsUpdateModel.header=this.cardsdto.find(x=>x.id == id).header;
     this.cardsUpdateModel.content=this.cardsdto.find(x=>x.id == id).content;
 }
 
  

  
  createCards(card:CardsDto)
  {
      this.cardService.createCards(card);
      window.location.reload();
  }

  updateCard(card:CardUpdateDto, id:number)
  {
      this.cardService.updateCards(card, id);
      window.location.reload();
  }

  deleteCard(id:number)
  {
      this.cardService.deleteCard(id);
      window.location.reload();
  }

}
