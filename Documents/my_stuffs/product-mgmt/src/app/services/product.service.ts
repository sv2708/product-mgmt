import { Injectable } from '@angular/core';
import { AsyncValidatorFn, FormControl } from '@angular/forms';
import { timer, of, BehaviorSubject } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Product} from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productSubject = new BehaviorSubject<Product[]>([]);
  productsData$ = this.productSubject.asObservable();

  constructor(private http: HttpClient) { }


  isProductIdExists(id: number) {
    return this.http.get(`api/ProductManagement/product/isexists/${id}`);
  }

  getAllProducts() {

    this.http.get(`api/ProductManagement/product/getallproducts`).subscribe(res => {

      const data  = res as Product[];
      this.productSubject.next([...data]);

    });

  }

  deleteProduct(id: string) {
      return this.http.delete(`api/ProductManagement/product/delete/${id}`);
  }

  productIdValidator(time: number = 500): AsyncValidatorFn {
    return (input: FormControl) => {

      return timer(time).pipe(
        switchMap(() => this.isProductIdExists(input.value)),
        map(res => {
          return res ? null : {isNotValid: true};
        })
      );
    };
  }

}
