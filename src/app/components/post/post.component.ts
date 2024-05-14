import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: PostModel

  constructor(public dialog: MatDialog) { }

  openCommentDialog(): void {
    console.log(this.post.idPost)
    const dialogRef = this.dialog.open(DialogCommentComponent, {
      width: '400px',
      data: { postId: this.post.idPost }
    });
  }

}
