import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoadmapService {
  private apiUrl = 'http://localhost:3000/roadmaps'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar o roadmap pelo ID
  buscarRoadmap(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
