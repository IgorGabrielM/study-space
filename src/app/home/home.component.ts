import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogPostComponent } from './dialog-post/dialog-post.component';
import { PostService } from '../services/post.service';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';
import { AuthService } from '../services/auth.service';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Router} from "@angular/router";

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
    private breakpointObserver: BreakpointObserver,
    private router: Router,

    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadPosts();
    this.loadInterests();
    this.interestSelected = null;
  }

  loadPosts() {
    this.postService.list().then((posts) => {
      this.posts = posts.reverse()
    })
  }

  loadInterests() {
    this.interestService.list().then((interests) => this.interests = interests)
  }

  openPostDialog(): void {
    let dialogWidth = '90vw';

    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(result => {
      if (!result.matches) {
        dialogWidth = '50vw';
      }
    })

      const dialogRef = this.dialog.open(DialogPostComponent, {
      width: dialogWidth,
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadPosts();
    })
  }

  filterPostsByInterests(idInterest: number) {
    this.interestSelected = this.interests.find((interest) => interest.idInterest === idInterest)
  }

  goTo(route: string) {
    this.router.navigate([`../${route}`]);
  }

}
