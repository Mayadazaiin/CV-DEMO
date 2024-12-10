import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/patch';
  token: any;

  constructor(private http: HttpClient) {}

  fetchData(Source: string = '', SearchString: string = ''): Observable<any> {
    let params = new HttpParams();
    if (Source) params = params.set('Source', Source);
    if (SearchString) params = params.set('SearchString', SearchString);
    return this.http.get<any>(this.apiUrl, { params });
  }

  deletePatch(id: string) {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

    updatePatch(id: string, patchDetails: any): Observable<any> {
    const url = 'https://gbg-dev-cvrankingapi-f7a2b3gtfvcag3a0.uksouth-01.azurewebsites.net/api/patch/UpdatePatch';
    const body = {
      id: id,
      patchName: patchDetails.patchName,
      source: patchDetails.source
    };
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      });
     return this.http.put(url, body, { headers });
  }
}
