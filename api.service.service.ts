import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl =
    'https://dev-apis.bubbleapp.com/core/event/64c7932b777be7592095c2be';

  constructor(private http: HttpClient) {}

  // Create a function to call your API
  public getData(): Observable<object> {
    return this.http.get<any>(this.apiUrl);
  }
}
