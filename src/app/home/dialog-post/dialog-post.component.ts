import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogCommentComponent } from 'src/app/components/post/dialog-comment/dialog-comment.component';
import { InterestModel } from 'src/app/models/interest.model';
import { PostModel } from 'src/app/models/post.model';
import { InterestService } from 'src/app/services/insterest.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.scss']
})
export class DialogPostComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;

  post: PostModel

  interests: InterestModel[] = [];
  filteredInterests: InterestModel[] = [];
  searchText: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogCommentComponent>,
    private interestService: InterestService,
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.post = new PostModel()
    this.post.insterestsId = []
    this.loadInterests()
  }

  loadInterests() {
    this.interestService.list().then((res) => {
      this.interests = res
      this.filteredInterests = res
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  search() {
    if (this.searchText.trim() === '') {
      this.filteredInterests = this.interests;
    } else {
      this.filteredInterests = this.interests.filter(interest =>
        interest.text.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  handleImageUrl(url: string) {
    this.post.imageUrl = url;
  }

  setInterest(event: any) {
    const interestId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      this.post.insterestsId.push(interestId);
    } else {
      const index = this.post.insterestsId.indexOf(interestId);
      if (index !== -1) {
        this.post.insterestsId.splice(index, 1);
      }
    }
  }

  verifyCheck(id: number): boolean {
    return this.post.insterestsId.find((interest) => interest === id) ? true : false;
  }

  onSubmit() {
    const userId = Number(localStorage.getItem('userId'));
    const payload = {
      ...this.post,
      idUser: userId,
      likesCount: 0,
      commentsCount: 0,
    }

    this.postService.createPost(payload).then(() => {
      this.closeDialog();
    })
  }
}
