import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';


export interface DialogData {

  msg: string;
  type: string;

}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    if (this.data.type === 'supply') {
      this.router.navigateByUrl('/supplies');
    } else if (this.data.type === 'vendor') {
      this.router.navigateByUrl('/vendors');
    } else if (this.data.type === 'product') {
      this.router.navigateByUrl('/products');
    } else {
      this.router.navigateByUrl('/');
 }
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close();
  }

}
