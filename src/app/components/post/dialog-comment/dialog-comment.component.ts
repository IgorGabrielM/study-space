import {Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentsService } from 'src/app/services/comments.service';
import {CommentModel} from "../../../models/comment.model";
import {PostModel} from "../../../models/post.model";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './dialog-comment.component.html',
  styleUrls: ['./dialog-comment.component.scss']
})
export class DialogCommentComponent implements OnInit {
  @ViewChild('draggable', {static: true}) draggable: ElementRef;
  @ViewChild('comment', {static: true}) commentInput: ElementRef;

  @Input() post: PostModel;

  commentText: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { post: PostModel },
    private commentsService: CommentsService,
    private postService: PostService,
    public dialogRef: MatDialogRef<DialogCommentComponent>
  ) {
    this.post = data.post;
  }

  ngOnInit(): void {
    console.log(this.post)
  }

  ngAfterViewInit() {
    this.commentInput.nativeElement.focus();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  sendComment() {
    const userId = localStorage.getItem('userId');
    this.commentsService.create({
      postId: this.post.idPost,
      text: this.commentText,
      userId: Number(userId)
    }).then(() => {
      this.postService.find(this.post.idPost).then((postFinded) => this.post = postFinded);
      this.commentText = '';
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const commentInput = document.getElementById('comment');
    if (window.innerHeight < 500) {
      commentInput!.style.bottom = '50px';
    } else {
      commentInput!.style.bottom = '0';
    }
  }

  selectInput(event: Event) {
    event.stopPropagation();
  }

  deselectInput(event: Event) {
    const commentInput = this.commentInput.nativeElement;
    if (event.target !== commentInput) {
      commentInput.blur();
    }
  }
}
