import { Component, OnInit } from '@angular/core';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards:Cards={
    id:1,
    contents:"Kamuda 657 sayılı Kanunun “4/D bendi” kapsamında çalışan işçilerin, puantaj, bordro, maaş, SGK bildirgeleri toplu iş sözleşmesi, özlük, sicil işlemleri... ve daha fazlası",
    header:"e-Kamuİşçi",
    photo:"url"
  };
  constructor() { }

  ngOnInit() {
  }

}
