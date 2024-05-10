import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  user: UserModel

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.user = new UserModel
  }

  onSubmit(){
    console.log(this.user)
    this.authService.createUser({
      ...this.user,
      idRole: 0,
      createdAt: new Date(),
      imageUrl: '',
      interests: [
        0
      ],
      posts: [
        0
      ]
    }).then((res) => {console.log(res)})
  }

}
