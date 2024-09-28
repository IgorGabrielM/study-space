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

  async createInterests(payload: InterestModel): Promise<void> {
    try {
      const response = await this.http.post<InterestModel>('http://localhost:3000/interests', payload).toPromise();
    } catch (error) {
    }
  }

  async list(): Promise<InterestModel[]> {
    try {
      return await this.http.get<InterestModel[]>('http://localhost:3000/interests').toPromise();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async find(id: number): Promise<InterestModel> {
    try {
      return await this.http.get<InterestModel>(`http://localhost:3000/interests/${id}`).toPromise();
    } catch (error) {
      return Promise.reject(error);
    }
  }

}
