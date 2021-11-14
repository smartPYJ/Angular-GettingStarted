import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
