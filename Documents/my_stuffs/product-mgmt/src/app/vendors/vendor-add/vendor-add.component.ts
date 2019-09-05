import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator.service';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from 'src/app/add-dialog/add-dialog.component';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {

  public vendorForm: FormGroup;

  constructor(private validatorService: ValidatorService,
              private vendorService: VendorService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {

    this.vendorForm = new FormGroup({
      vendorName: new FormControl('', {validators: [Validators.required, Validators.minLength(3),
                                                          this.validatorService.nameValidator()]}),
      addressLine1: new FormControl(null, {validators: [Validators.required, Validators.minLength(5)]}),
      addressLine2: new FormControl(''),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      phoneNumber: new FormControl(null, {validators: [Validators.required, this.validatorService.numberValidator(),
                                                        Validators.minLength(10), Validators.maxLength(10)]})
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.vendorForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.router.navigateByUrl('/vendors');
    return;
  }

  addVendor(vendor: FormControl) {

    console.log(vendor);
    // tslint:disable-next-line: no-string-literal
    const addr = vendor['addressLine1'] + ' ' + vendor['addressLine2'];
    // tslint:disable-next-line: no-string-literal
    const phonenumber = parseInt(vendor['phoneNumber'], 10);
    // tslint:disable-next-line: no-string-literal
    delete vendor['addressLine1']; delete vendor['addressLine2']; delete vendor['phoneNumber'];
    this.vendorService.addVendor({address: addr, ...vendor, phonenumber}).subscribe(res => {

      this.dialog.open(AddDialogComponent,
          { width: '40rem', height: '10rem',
               data: {msg: 'Vendor Added Successfully', type: 'vendor'}
           });

      }, err => {
        this.dialog.open(AddDialogComponent, {
          width: '40rem', height: '10rem',
            data: {msg: 'Vendor Addition Failed', type: 'vendor'}
        });
      });
    }
}
