import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  isVendorIdExists(id: number) {
    return this.http.get(`api/VendorManagement/vendor/isexists/${id}`);
  }

}
