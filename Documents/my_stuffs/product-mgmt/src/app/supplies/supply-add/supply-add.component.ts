import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ValidatorService } from 'src/app/services/validator.service';
import { Router } from '@angular/router';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';
import { SupplyService } from 'src/app/services/supply.service';
import { AddDialogComponent } from '../../add-dialog/add-dialog.component';

export const MY_FORMAT = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'app-supply-add',
  templateUrl: './supply-add.component.html',
  styleUrls: ['./supply-add.component.css'],
  providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT},
  ]
})
export class SupplyAddComponent implements OnInit {

  public supplyForm: FormGroup;

  constructor(private prodService: ProductService,
              private valService: ValidatorService,
              private supplyService: SupplyService,
              private routerService: Router,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.supplyForm = new FormGroup({
      productId: new FormControl(null, {validators: [Validators.required, this.valService.numberValidator()],
                                        asyncValidators: this.prodService.productIdValidator()}),
      vendorId: new FormControl(null, {validators: [Validators.required, this.valService.numberValidator()],
                                        asyncValidators: this.valService.vendorIdValidator()}),
      purchaseQuantity: new FormControl('', [Validators.required, this.valService.numberValidator(), Validators.min(1)]),
      supplyDate: new FormControl(moment(new Date()).format('YYYY-MM-DD'), Validators.required)
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.supplyForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {


    this.routerService.navigateByUrl('/supplies');
    return;

  }

  addSupply(form: FormControl): void {

    console.log(form);
    // tslint:disable-next-line: no-string-literal
    form['supplyDate'] = moment(form['supplyDate']).format('YYYY-MM-DD');
    this.supplyService.addSupply(form).subscribe(res => {

        this.dialog.open(AddDialogComponent, {
          width: '400px', height: '8rem',
          data: {msg: 'Supply Added Successfully'}
        });
    }, err => {

        this.dialog.open(AddDialogComponent, {
          width: '400px', height: '8rem',
            data: {msg: 'Supply Addition Failed'}
        });

      });

    }
}
