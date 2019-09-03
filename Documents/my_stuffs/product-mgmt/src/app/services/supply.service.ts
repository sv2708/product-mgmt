import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  public addSupply(supply: Object): Observable<any> {

    return this.http.post('api/SupplyManagement/supply/add', supply);

  }

}
