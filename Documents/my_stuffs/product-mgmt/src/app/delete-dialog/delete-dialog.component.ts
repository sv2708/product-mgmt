import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../services/product.service';
import { SupplyService } from '../services/supply.service';
import { VendorService } from '../services/vendor.service';


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
    private productService: ProductService,
    private supplyService: SupplyService,
    private vendorService: VendorService
  ) { }

  ngOnInit() {
  }

  onYesClick() {
    if (this.data.type === 'product') {
      this.productService.deleteProduct(this.data.id).subscribe(res => this.dialogRef.close());
    } else if (this.data.type === 'supply') {
      this.supplyService.deleteSupply(this.data.id).subscribe(res => this.dialogRef.close());
    } else if (this.data.type === 'vendor') {
      this.vendorService.deleteVendor(this.data.id).subscribe(res => this.dialogRef.close());
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
