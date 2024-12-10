// chat-session.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatSessionService {
  private apiUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/Chat/GetChatSession';

  constructor(private http: HttpClient) {}

  // Method to fetch chat history
  getChatSession(): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.post<any>(this.apiUrl, {}, { headers });
  }
}
