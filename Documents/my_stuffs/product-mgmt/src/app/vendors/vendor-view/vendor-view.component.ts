import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Vendor } from '../vendor.model';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { VendorService } from 'src/app/services/vendor.service';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { VendorUpdateComponent } from '../vendor-update/vendor-update.component';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.css']
})
export class VendorViewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['vendorId', 'vendorName', 'address', 'email', 'phoneNumber', 'update', 'delete'];
  public vendors = new MatTableDataSource<Vendor>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private vendorService: VendorService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.vendorService.getAllVendors();
  }

  ngAfterViewInit(): void {
    this.vendorService.vendorsData$.subscribe(res => {
      this.vendors = new MatTableDataSource([...res]);
      this.vendors.paginator = this.paginator;
    });
  }

  updateClick(vendor: Vendor) {

    console.log(vendor);

    const dialogRef = this.dialog.open(VendorUpdateComponent, {
      data: vendor,
      width: '40rem',
      panelClass: 'no-padding-dialog'
    });

  }

  deleteClick(id: string) {


      const dialogRef =  this.dialog.open( DeleteDialogComponent, {
        width: '40rem', height: '8rem',
        data: {id, type: 'vendor'}
      });

      dialogRef.afterClosed().subscribe(() => this.vendorService.getAllVendors());

  }

}
