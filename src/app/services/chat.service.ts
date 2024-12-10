import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/Chat/ListChats';

  constructor(private http: HttpClient) {}

  getChats(): Observable<any> {
    const body = {}; 
    return this.http.post<any>(this.apiUrl, body).pipe(
      catchError((error) => {
        console.error('Error fetching chats:', error);
        return throwError(() => error);
      })
    );
  }
}
