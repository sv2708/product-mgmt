import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AddDialogComponent } from 'src/app/add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public productForm: FormGroup;

  constructor(private valService: ValidatorService,
              private productService: ProductService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {

    this.productForm = new FormGroup({
      productName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      manufacturerDetails: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      price: new FormControl(null, {validators: [Validators.required, Validators.min(0) , this.valService.numberValidator()]})
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.productForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.router.navigateByUrl('/products');
    return;
  }

  addProduct(product: FormControl) {

    this.productService.addProduct(product).subscribe(res => {

      this.dialog.open(AddDialogComponent, {
        width: '40rem', height: '10rem',
        data: {msg: 'Product Added Successfully', type: 'product'}
      });
  }, err => {
      this.dialog.open(AddDialogComponent, {
        width: '40rem', height: '10rem',
          data: {msg: 'Product Addition Failed', type: 'product'}
      });
    });
  }

}
