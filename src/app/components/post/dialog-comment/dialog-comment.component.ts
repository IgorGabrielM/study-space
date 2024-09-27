import {Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './dialog-comment.component.html',
  styleUrls: ['./dialog-comment.component.scss']
})
export class DialogCommentComponent implements OnInit {
  @ViewChild('comment') commentInput!: ElementRef;

  commentText: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { postId: number },
    private commentsService: CommentsService,
    public dialogRef: MatDialogRef<DialogCommentComponent>
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.commentInput.nativeElement.focus();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  comment() {
    const userId = localStorage.getItem('userId');

    this.commentsService.create({
      postId: this.data.postId,
      text: this.commentText,
      userId: Number(userId)
    }).then(() => {
      //toast de sucesso
      this.dialogRef.close();
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const commentInput = document.getElementById('comment');
    if (window.innerHeight < 500) { // Ajuste o valor conforme necessário
      commentInput!.style.bottom = '50px'; // Ajuste a posição conforme necessário
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
