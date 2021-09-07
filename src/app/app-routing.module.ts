import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CardsComponent } from './cards/cards.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'cards', component: CardsComponent },
  { path: '**',   redirectTo: '/dashboard', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
