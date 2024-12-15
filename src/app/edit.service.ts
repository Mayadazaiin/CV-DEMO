import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  private baseUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/patch';

  constructor(private http: HttpClient) {}

  // Fetch patch by ID
  getPatchById(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer YOUR_BEARER_TOKEN_HERE`, // Replace with dynamic token logic
    });

    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }

  // Update patch
  updatePatch(patchData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer YOUR_BEARER_TOKEN_HERE`, // Replace with dynamic token logic
      'Content-Type': 'application/json',
    });

    return this.http.put<any>(`${this.baseUrl}/UpdatePatch`, patchData, {
      headers,
    });
  }
}
