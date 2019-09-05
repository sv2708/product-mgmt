import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vendor } from '../vendors/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private vendorSubject = new BehaviorSubject<Vendor[]>([]);
  vendorsData$ = this.vendorSubject.asObservable();

  constructor(private http: HttpClient) { }

  isVendorIdExists(id: number) {
    return this.http.get(`api/VendorManagement/vendor/isexists/${id}`);
  }

  // tslint:disable-next-line: ban-types
  addVendor(vendor: Object): Observable<any> {
    return this.http.post(`api/VendorManagement/vendor/add`, vendor);
  }

  // tslint:disable-next-line: ban-types
  updateVendor(vendor: Object): Observable<any> {
    console.log(vendor);
    return this.http.put(`api/VendorManagement/vendor/update`, vendor);
  }

  getAllVendors() {

    return this.http.get(`api/VendorManagement/vendor/getallvendors`).subscribe(res => {

      const data = res as Vendor[];
      this.vendorSubject.next([...data]);


    });

  }

  deleteVendor(id: string) {

    return this.http.delete(`api/VendorManagement/vendor/delete/${id}`);

  }

}
