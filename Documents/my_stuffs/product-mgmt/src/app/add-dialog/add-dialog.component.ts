import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';


export interface DialogData {

  msg: string;

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
    this.router.navigateByUrl('/supplies');
    this.dialogRef.close();
  }

  onYesClick(){
    this.dialogRef.close();
  }

}
