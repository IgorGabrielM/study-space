import { Component } from '@angular/core';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: UserModel = {
    name: 'Mark Zuckerberg',
    userPicUrl: 'https://classic.exame.com/wp-content/uploads/2024/01/GettyImages-1693797798.jpg?quality=70&strip=info'
  }

  posts: PostModel[] = [
    {
      author: {
        name: 'Mark Zuckerberg',
        userPicUrl: 'https://classic.exame.com/wp-content/uploads/2024/01/GettyImages-1693797798.jpg?quality=70&strip=info'
      },
      createdAt: new Date(),
      interests: 1,
      commentsCount: 0,
      likesCount: 5,
      imagePosterUrl: '',
      text: `Inteligência Artificial (IA) é um campo da ciência da computação que se  concentra no desenvolvimento
       de sistemas capazes de realizar tarefas  que, normalmente, requerem inteligência humana.
        Essas tarefas incluem  desde reconhecimento de padrões até tomada de decisões complexas. As  aplicações da IA são vastas e estão...`
    }
  ];

  daysActivities = []

  constructor() { }

  ngOnInit() { }

}
