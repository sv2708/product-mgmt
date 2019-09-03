import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../services/product.service';

export interface DialogData {

  id: string;
  type: string;

}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  onYesClick() {
    if (this.data.type === 'product') {
      this.productService.deleteProduct(this.data.id).subscribe(res => this.dialogRef.close());
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
