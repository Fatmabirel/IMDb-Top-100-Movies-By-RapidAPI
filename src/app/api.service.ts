import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/'; // API url 

  constructor(private http: HttpClient) {}

  getTop100Movies(): Observable<any> {
    const headers = new HttpHeaders({ // API headers bilgileri
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
      'x-rapidapi-key': '1cd0b07e55msh766ca1b28cc97eep1ddf20jsn394261c6dd7d',
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
