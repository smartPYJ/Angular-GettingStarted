import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipes';
import { starComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ConvertToSpacesPipe,
    starComponent,
    ProductDetailComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
