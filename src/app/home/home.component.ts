import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [
    {
      author: {
        name: 'Mark Zuckerberg',
        imageUrl: 'https://classic.exame.com/wp-content/uploads/2024/01/GettyImages-1693797798.jpg?quality=70&strip=info'
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

  constructor() { }

  ngOnInit() { }

}
