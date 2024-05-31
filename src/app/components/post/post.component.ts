import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogCommentComponent } from './dialog-comment/dialog-comment.component';
import { PostService } from 'src/app/services/post.service';
import { UserModel } from 'src/app/models/user.model';

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

  ngOnInit(): void { }

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
    this.commentIsOpen = !this.commentIsOpen
    this.postService.find(idPost).then((res) => {
      this.post = res
    })
  }

  addLike() {
    if (this.isLiked()) {
      const userId = Number(localStorage.getItem('userId'));
      const payload = {
        idPost: this.post.idPost,
        idUser: userId
      }
      this.post.likes = this.post.likes.filter((like) => like.idUser !== userId);
      this.postService.removeLike(payload)
    } else {
      const userId = Number(localStorage.getItem('userId'));
      const payload = {
        idPost: this.post.idPost,
        idUser: userId
      }
      const user = new UserModel()
      this.post.likes.push({ ...user, idUser: userId })
      this.postService.addLike(payload).then()
    }
  }

  isLiked(): boolean {
    const userId = Number(localStorage.getItem('userId'));
    const userLiked = this.post.likes.find((like) => like.idUser === userId)
    return userLiked ? true : false
  }

}
