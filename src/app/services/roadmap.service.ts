import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoadmapService {
  private apiUrl = 'https://study-space-1beb84dc5047.herokuapp.com/roadmaps'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar o roadmap pelo ID
  listRoadmap(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  findRoadmap(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
