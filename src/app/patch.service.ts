import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatchService {
  private apiUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/patch'; 

  constructor(private http: HttpClient) {}

  // Method to fetch batches with filters
  getBatches(filters: {
    source: string;
    search: string;
    pageNumber: number;
    pageSize: number;
    sorting: string;
  }): Observable<any[]> {
    // Construct query parameters
    let params = new HttpParams()
      .set('Source', filters.source || '-1')
      .set('PageNumber', filters.pageNumber.toString())
      .set('PageSize', filters.pageSize.toString())
      .set('SearchString', filters.search || '')
      .set('Sorting', filters.sorting || '');

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}

