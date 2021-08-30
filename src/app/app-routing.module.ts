import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: DashboardComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
