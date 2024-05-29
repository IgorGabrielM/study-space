import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from './dialog-post/dialog-post.component';
import { PostService } from '../services/post.service';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];
  interests: InterestModel[] = [];

  interestSelected: InterestModel;

  constructor(
    private postService: PostService,
    private interestService: InterestService,

    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadPosts();
    this.loadInterests();
    this.interestSelected = null;
  }

  loadPosts() {
    this.postService.list().then((posts) => this.posts = posts)
  }

  loadInterests() {
    this.interestService.list().then((interests) => this.interests = interests)
  }

  openPostDialog(): void {
    const dialogRef = this.dialog.open(DialogPostComponent, {
      width: '600px',
    });
  }

  filterPostsByInterests(idInterest: number) {
    this.interestSelected = this.interests.find((interest) => interest.idInterest === idInterest)
  }

}
