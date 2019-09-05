import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../product.model';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['productId', 'productName', 'manufacturerDetails', 'price', 'update', 'delete'];
  public products = new MatTableDataSource<Product>([]);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private productService: ProductService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.productService.getAllProducts();
  }

  ngAfterViewInit(): void {
    this.productService.productsData$.subscribe(res => {
      this.products = new MatTableDataSource([...res]);
      this.products.paginator = this.paginator;
    });
  }

  deleteClick(id: number) {
    console.log(id);
    const dialogRef =  this.dialog.open( DeleteDialogComponent, {
      width: '40rem', height: '8rem',
      data: {id, type: 'product'}
    });

    dialogRef.afterClosed().subscribe(() => this.productService.getAllProducts());

  }

  updateClick(product: Product) {


    const dialogRef = this.dialog.open(ProductUpdateComponent, {
      data: product,
      width: '20rem',
      panelClass: 'no-padding-dialog'
    });


  }


}
