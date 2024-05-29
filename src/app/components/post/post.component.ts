import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: PostModel
  commentIsOpen: boolean = false;

  constructor(
    private postService: PostService,

    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCommentDialog(): void {
    const dialogRef = this.dialog.open(DialogCommentComponent, {
      width: '400px',
      data: { postId: this.post.idPost },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.openComment(this.post.idPost);
    })
  }

  openComment(idPost: number) {
    this.commentIsOpen = true
    this.postService.find(idPost).then((res) => {
      this.post = res
    })
  }

}
