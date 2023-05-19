import { Injectable } from '@angular/core';
import { Country } from '../models/ng-net-ui';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NgNetUIService {
 private url="Country";
  constructor(private http:HttpClient) { }

  public getCountries() : Observable<Country[]>{
    return this.http.get<Country[]>(`${environment.apiUrl}/${this.url}`);
  }
}
