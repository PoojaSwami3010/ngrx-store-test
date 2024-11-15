import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to get data from the API
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
