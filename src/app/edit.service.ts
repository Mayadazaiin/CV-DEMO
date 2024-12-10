import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  private apiUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/patch/UpdatePatch';

  constructor(private http: HttpClient) {}

  // getPatchById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/api/patch/GetPatchById/${id}`);
  // }

  updatePatch(patch: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}`, patch);
  }
}
