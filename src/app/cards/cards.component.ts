import { Component, OnInit } from '@angular/core';
import { Cards } from '../models/cards';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards:Cards[];
  // {
  //   id:1,
  //   contents:"Kamuda 657 sayılı Kanunun “4/D bendi” kapsamında çalışan işçilerin, puantaj, bordro, maaş, SGK bildirgeleri toplu iş sözleşmesi, özlük, sicil işlemleri... ve daha fazlası",
  //   header:"e-Kamuİşçi",
  //   photo:"url"
  // };
  constructor(private cardService:CardService) { }
 
  ngOnInit()
  {
      this.cardService.getCards().subscribe(data => {
          this.cards = data;
      })
  }

  createCards(card:Cards)
  {
      this.cardService.createCards(card);
      window.location.reload();
  }

  updateCardsForm(card:Cards, id:number)
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
