import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';
import { InterestService } from '../services/insterest.service';
import { InterestModel } from '../models/interest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: UserModel

  interests: InterestModel[] = [];
  filteredInterests: InterestModel[] = [];

  searchText: string = '';

  constructor(
    private authService: AuthService,
    private interestService: InterestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new UserModel
    this.user.gender = '1'
    this.user.interests = []
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

  setInterest(event: any) {
    const interestId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      this.user.interests.push(interestId);
    } else {
      const index = this.user.interests.indexOf(interestId);
      if (index !== -1) {
        this.user.interests.splice(index, 1);
      }
    }
  }

  verifyCheck(id: number): boolean {
    return this.user.interests.find((interest) => interest === id) ? true : false;
  }

  onSubmit() {
    this.authService.createUser({
      ...this.user,
      idRole: 0,
      createdAt: new Date(),
      interests: [
        0
      ],
      posts: []
    }).then((res) => {
      this.router.navigate(['../sign-in'])
    })
  }

}
