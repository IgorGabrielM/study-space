import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  async createUser(payload: UserModel): Promise<void> {
    try {
      const response = await this.http.post<any>('http://localhost:3000/users', payload).toPromise();
      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

}
