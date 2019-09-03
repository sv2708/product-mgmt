import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { AsyncValidatorFn, FormControl } from '@angular/forms';
import { timer, of } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';
import { VendorService } from './vendor.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private vendorService: VendorService) { }

  numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        return isNaN(control.value) ? {isNotNumber: true} : null;

    }
  }

  vendorIdValidator(time: number = 500): AsyncValidatorFn {
    return (input: FormControl) => {

      return timer(time).pipe(
        switchMap(() => this.vendorService.isVendorIdExists(input.value)),
        map(res => {
          return res ? null : {isNotValid: true};
        })
      );
    };
  }
}
