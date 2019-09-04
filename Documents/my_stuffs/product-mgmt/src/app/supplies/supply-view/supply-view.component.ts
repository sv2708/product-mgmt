import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { Supply } from '../supply.model';
import { SupplyService } from 'src/app/services/supply.service';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-supply-view',
  templateUrl: './supply-view.component.html',
  styleUrls: ['./supply-view.component.css']
})
export class SupplyViewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['supplyId', 'productId', 'vendorId', 'purchaseQuantity', 'supplyDate', 'delete'];
  public supplies = new MatTableDataSource<Supply>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private supplyService: SupplyService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.supplyService.getAllSupplies();
  }

  ngAfterViewInit(): void {
    this.supplyService.supplyData$.subscribe(res => {
      this.supplies = new MatTableDataSource([...res]);
      this.supplies.paginator = this.paginator;
    });
  }

  deleteClick(id: number) {
    // console.log(id);
    const dialogRef =  this.dialog.open( DeleteDialogComponent, {
      width: '40rem', height: '8rem',
      data: {id, type: 'supply'}
    });

    dialogRef.afterClosed().subscribe(() => this.supplyService.getAllSupplies());

  }

}

