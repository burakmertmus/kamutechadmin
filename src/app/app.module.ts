import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [		
    AppComponent,
      PagesComponent,
      DashboardComponent,
      CardsComponent,
      ArticleComponent,
      CommentsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
