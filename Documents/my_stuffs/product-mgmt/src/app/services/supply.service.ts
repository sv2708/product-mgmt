import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Supply } from '../supplies/supply.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  private supplySubject = new BehaviorSubject<Supply[]>([]);
  supplyData$ = this.supplySubject.asObservable();

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  public addSupply(supply: Object): Observable<any> {

    return this.http.post('api/SupplyManagement/supply/add', supply);

  }

  public deleteSupply(id: string){
    return this.http.delete(`api/SupplyManagement/supply/delete/${id}`);
  }

  public getAllSupplies() {

    this.http.get(`api/SupplyManagement/supply/getallsupplies`).subscribe(res => {
      let data  = res as Supply[];
      data = data.map(r => {
          return {...r, supplyDate: moment(r.supplyDate, 'YYYY-MM-DD').format('DD/MM/YYYY')};
      });

      this.supplySubject.next([...data]);

    });


  }

}
