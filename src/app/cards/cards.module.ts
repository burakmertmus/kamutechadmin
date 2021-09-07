import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardService } from '../services/card.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CardsComponent],
  providers:[CardService]
})
export class CardsModule { }
  