import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from './dialog-post/dialog-post.component';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(
    public dialog: MatDialog,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.list().then((posts) => this.posts = posts)
  }

  openPostDialog(): void {
    const dialogRef = this.dialog.open(DialogPostComponent, {
      width: '600px',
    });
  }

}
