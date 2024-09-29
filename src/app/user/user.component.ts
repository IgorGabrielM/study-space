import {Component, OnInit} from '@angular/core';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {MediaService} from "../services/media.service";
import {MediaModel} from "../models/media.model";
import {Breakpoints} from "@angular/cdk/layout";
import {DialogPostComponent} from "../home/dialog-post/dialog-post.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogMediaComponent} from "./dialog-media/dialog-media.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  user: UserModel

  posts: PostModel[] = [];
  interests: InterestModel[] = [];
  cursos: MediaModel[] = []

  constructor(
    private interestService: InterestService,
    private authService: AuthService,
    private router: Router,
    private mediaService: MediaService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadUser();
    this.loadMedia();
  }

  loadUser() {
    const userToken = localStorage.getItem('userId');
    this.authService.find(userToken).then(async (usr) => {
      this.user = usr;

      this.user.posts = this.user.posts.map((post) => {
        return {
          ...post,
          user: usr
        }
      })

      const interestPromises = this.user.interests.map((int) => {
        return this.interestService.find(int);
      });

      this.interests = await Promise.all(interestPromises);
    })
  }

  loadMedia(){
    const userToken = localStorage.getItem('userId');
    this.mediaService.listByUserId(userToken).then((res) => {
      this.cursos = res;
    })
  }

  openDialogMedia(){
    let dialogWidth = '90vw';

    const dialogRef = this.dialog.open(DialogMediaComponent, {
      width: dialogWidth,
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadMedia();
    })
  }

  signOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');
    this.router.navigate(['../sign-in'])
  }
}
