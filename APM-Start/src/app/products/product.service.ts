import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Iproduct } from "./product";
import {catchError, tap} from "rxjs/operators";

@Injectable ({
    providedIn:'root'
})
export class productService      {

private productUrl = 'api/products/products.json';
constructor(private http: HttpClient){}
getproduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.productUrl).pipe(
      tap(data => console.log( JSON.stringify(data))),
      catchError(this.handleError)
    );

}
private handleError (err:HttpErrorResponse){

  let errorMessage= '';
  if (err.error instanceof ErrorEvent){

    errorMessage = `An Error occured:${err.error.message}`;
  }else{

    errorMessage = `server  returneed code :${err.status}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}

}