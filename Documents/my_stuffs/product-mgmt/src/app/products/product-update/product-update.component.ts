import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator.service';


export interface DialogData {

  productName: string;
  manufacturerDetails: string;
  price: number;
  productId: number;
}


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public productUpdateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProductUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private productService: ProductService,
              private valService: ValidatorService) { }

  ngOnInit() {

    this.productUpdateForm = new FormGroup({
      productName: new FormControl(this.data.productName,
                                   {validators: [Validators.required,
                                    Validators.minLength(3)]}),
     manufacturerDetails: new FormControl(this.data.manufacturerDetails,
                                          {validators: [Validators.required, Validators.minLength(6)]}),
      price: new FormControl(this.data.price, {validators: [Validators.required, Validators.min(0) , this.valService.numberValidator()]})
    });

  }
  updateProduct(form: FormControl) {

    this.productService.updateProduct({
                                      // tslint:disable-next-line: no-string-literal
                                      productName: form['productName'],
                                      productId: this.data.productId,
                                      // tslint:disable-next-line: no-string-literal
                                      manufacturerDetails: form['manufacturerDetails'],
                                      // tslint:disable-next-line: no-string-literal
                                      price: form['price']
                            }).subscribe(res => {
                              this.productService.getAllProducts();
                              this.dialogRef.close();
                            }, err => {
                              console.log('Update failed');
                              this.dialogRef.close();
                            });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.productUpdateForm.controls[controlName].hasError(errorName);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
