import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cachedData: any = {};
  constructor(private http: HttpClient) { }

  public getBanks(city){
    return this.http.get('https://vast-shore-74260.herokuapp.com/banks', {
      params: {
        city
      }
    });
  }
}
