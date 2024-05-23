import { Component } from '@angular/core';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: UserModel = {
    name: 'Mark Zuckerberg',
    imageUrl: 'https://classic.exame.com/wp-content/uploads/2024/01/GettyImages-1693797798.jpg?quality=70&strip=info'
  }

  posts: PostModel[] = [];

  daysActivities = [];

  interests: InterestModel[] = [];

  constructor(
    private interestService: InterestService
  ) { }

  ngOnInit() {
    this.user.interests = this.user.interests ? this.user.interests : []
    this.loadInterests();
  }

  async loadInterests() {
    const interestPromises = this.user.interests.map((int) => {
      return this.interestService.find(int);
    });

    this.interests = await Promise.all(interestPromises);
  }

}
