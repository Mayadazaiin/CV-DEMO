import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateChatService {
  private baseUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/Chat/CreateChatSession'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  createChatSession(name: string): Observable<any> {
    const url = `${this.baseUrl}/CreateChatSession?Name=${name}`;
    console.log('Request URL:', url); // Log the full URL
    return this.http.post(url, {});
  }
}
