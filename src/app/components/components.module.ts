import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DialogCommentComponent } from './post/dialog-comment/dialog-comment.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { InputFileComponent } from './input-file/input-file.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PostComponent,
    HeaderComponent,
    DialogCommentComponent,
    InputFileComponent,
  ],
  exports: [
    PostComponent,
    HeaderComponent,
    InputFileComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    ProgressBarModule,
    ToastModule
  ]
})
export class ComponentsModule { }
