import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentService } from '../services/comment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentsComponent],
  providers: [CommentService],
})
export class CommentsModule { }
