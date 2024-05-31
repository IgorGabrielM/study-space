import { Component } from '@angular/core';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: UserModel

  posts: PostModel[] = [];

  daysActivities = [];

  interests: InterestModel[] = [];

  constructor(
    private interestService: InterestService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadUser();
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

  signOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');
    this.router.navigate(['../sign-in'])
  }
}
