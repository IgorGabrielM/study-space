import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  async create(payload: CommentModel): Promise<void> {
    try {
      const response = await this.http.post<CommentModel>('http://localhost:3000/post-comments', payload).toPromise();
      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  async list(): Promise<void> {
    try {
      const response = await this.http.get<CommentModel>('http://localhost:3000/posts').toPromise();
      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

}
