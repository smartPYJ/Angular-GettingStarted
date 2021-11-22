
import { Iproduct } from './product'
import { Component, OnDestroy, OnInit } from "@angular/core";
import { productService } from './product.service';
import { Subscription } from 'rxjs';

@Component({

  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']


})
export class productListComponent implements OnInit, OnDestroy  {

  pageTitle: string = 'Product Title ';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';
  sub! : Subscription;

  private _listFilter: string= '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Iproduct[] = [];


  products: Iproduct[] = [];


  constructor(private productService: productService) { }

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));

  }
  toggleImage(): void {
    this.showImage = !this.showImage;

  }

  ngOnInit() {

    this.sub = this.productService.getproduct().subscribe({
      next: products => { 
        
        this.products = products;
        this.filteredProducts = this.products;
      
      },
      error: err => this.errorMessage = err

    });
  }

  ngOnDestroy (){

this.sub.unsubscribe();

  }

  onRatingClicked(message: string): void {

    this.pageTitle = 'Product List: ' + message;


  }
}