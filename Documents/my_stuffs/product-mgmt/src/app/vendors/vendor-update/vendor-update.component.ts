import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorService } from 'src/app/services/validator.service';
import { VendorService } from 'src/app/services/vendor.service';



export interface DialogData {

  vendorId: number;
  vendorName: string;
  address: string;
  phonenumber: number;
  email: string;
}


@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {

  public vendorUpdateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<VendorUpdateComponent>,
              private validatorService: ValidatorService,
              private vendorService: VendorService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.data);
    this.vendorUpdateForm = new FormGroup({
      vendorName: new FormControl(this.data.vendorName, {validators: [Validators.required, Validators.minLength(3),
                                                          this.validatorService.nameValidator()]}),
      address: new FormControl(this.data.address, {validators: [Validators.required, Validators.minLength(5)]}),
      email: new FormControl(this.data.email, {validators: [Validators.required, Validators.email]}),
      phoneNumber: new FormControl(this.data.phonenumber, {validators: [Validators.required, this.validatorService.numberValidator(),
                                                        Validators.minLength(10), Validators.maxLength(10)]})
    });

  }

  updateVendor(form: FormControl) {

    // tslint:disable-next-line: no-string-literal
    const phonenumber = parseInt(form['phoneNumber'], 10); delete form['phoneNumber'];
    const vendorId = this.data.vendorId;
    this.vendorService.updateVendor({...form, phonenumber, vendorId}).subscribe(res => {
        this.dialogRef.close();
        this.vendorService.getAllVendors();
      },
      console.log);

    this.dialogRef.close();

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.vendorUpdateForm.controls[controlName].hasError(errorName);
  }

  onCancel() {
    this.dialogRef.close();
  }


}
