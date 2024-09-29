import {Component, Inject, Input, OnInit} from '@angular/core';
import {ComponentsModule} from "../../components/components.module";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {NgForOf} from "@angular/common";
import {PostModel} from "../../models/post.model";
import {MediaModel} from "../../models/media.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CommentsService} from "../../services/comments.service";
import {PostService} from "../../services/post.service";
import {MediaService} from "../../services/media.service";
import {DialogCommentComponent} from "../../components/post/dialog-comment/dialog-comment.component";
import {InterestModel} from "../../models/interest.model";
import {InterestService} from "../../services/insterest.service";

@Component({
  selector: 'app-dialog-media',
  standalone: true,
  imports: [
    ComponentsModule,
    FormsModule,
    InputTextModule,
    NgForOf
  ],
  templateUrl: './dialog-media.component.html',
  styleUrl: './dialog-media.component.scss'
})
export class DialogMediaComponent implements OnInit {
  media: MediaModel

  interests: InterestModel[] = [];
  filteredInterests: InterestModel[] = [];
  searchText: string = '';

  constructor(
    private mediaService: MediaService,
    public dialogRef: MatDialogRef<DialogCommentComponent>,
    private interestService: InterestService,
  ) {}

  ngOnInit(): void {
    this.media = new MediaModel()
    this.media.insterestsId = []
    this.loadInterests();
  }

  loadInterests() {
    this.interestService.list().then((res) => {
      this.interests = res
      this.filteredInterests = res
    });
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
    this.media.imageUrl = url;
  }

  setInterest(event: any) {
    const interestId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      this.media.insterestsId.push(interestId);
    } else {
      const index = this.media.insterestsId.indexOf(interestId);
      if (index !== -1) {
        this.media.insterestsId.splice(index, 1);
      }
    }
  }

  verifyCheck(id: number): boolean {
    return this.media.insterestsId.find((interest) => interest === id) ? true : false;
  }

  onSubmit() {
    const userId = Number(localStorage.getItem('userId'));
    const payload = {
      ...this.media,
      idUser: userId,
    }

    this.mediaService.create(payload).then(() => {
      this.closeDialog();
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
