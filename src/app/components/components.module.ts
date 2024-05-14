import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DialogCommentComponent } from './post/dialog-comment/dialog-comment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostComponent,
    HeaderComponent,
    DialogCommentComponent,
  ],
  exports: [
    PostComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatDialogModule,
    FormsModule
  ]
})
export class ComponentsModule { }
