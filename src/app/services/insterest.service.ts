import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterestModel } from '../models/interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(
    private http: HttpClient
  ) { }

  async createPost(payload: InterestModel): Promise<void> {
    try {
      const response = await this.http.post<InterestModel>('http://localhost:3000/interests', payload).toPromise();
      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  async list(): Promise<InterestModel[]> {
    try {
      return await this.http.get<InterestModel[]>('http://localhost:3000/interests').toPromise();
    } catch (error) {
      console.error('Erro:', error);
      return Promise.reject(error);
    }
  }

}
