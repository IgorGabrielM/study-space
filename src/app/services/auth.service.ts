import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';

export class AuthModel {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  async createUser(payload: UserModel): Promise<void> {
    try {
      const response = await this.http.post<UserModel>('http://localhost:3000/users', payload).toPromise();
    } catch (error) {
    }
  }

  async auth(payload: AuthModel): Promise<any> {
    try {
      return await this.http.post<UserModel>('http://localhost:3000/auth', payload).toPromise();
    } catch (error) {
    }
  }

  async isAuthenticated(): Promise<boolean> {
    try {
      const userToken = localStorage.getItem('userToken');
      const jwtDecoded = jwtDecode(userToken)
      return jwtDecode !== null;
    } catch (error) {
      return false;
    }
  }

}
