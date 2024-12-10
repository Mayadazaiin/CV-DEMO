import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  private apiUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/patch/upload';

  constructor(private http: HttpClient) {}

  uploadBatch(batchData: any, token: string): Observable<any> {
    return this.http.post(this.apiUrl, batchData);
  }
}
