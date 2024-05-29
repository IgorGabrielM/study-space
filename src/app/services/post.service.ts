import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  async createPost(payload: PostModel): Promise<void> {
    try {
      const response = await this.http.post<PostModel>('http://localhost:3000/posts', payload).toPromise();
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  async list(): Promise<PostModel[]> {
    try {
      return await this.http.get<PostModel[]>('http://localhost:3000/posts').toPromise();
    } catch (error) {
      console.error('Erro:', error);
      return Promise.reject(error);
    }
  }

  async find(id): Promise<PostModel> {
    try {
      return await this.http.get<PostModel>(`http://localhost:3000/posts/${id}`).toPromise();
    } catch (error) {
      console.error('Erro:', error);
      return Promise.reject(error);
    }
  }

}
