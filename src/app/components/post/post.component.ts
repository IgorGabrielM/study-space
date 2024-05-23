import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: PostModel

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.post)
  }

  openCommentDialog(): void {
    const dialogRef = this.dialog.open(DialogCommentComponent, {
      width: '400px',
      data: { postId: this.post.idPost }
    });
  }

}
