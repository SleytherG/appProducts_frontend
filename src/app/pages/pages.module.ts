import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {ListProductsComponent} from "./list-products/list-products.component";
import {PagesRoutingModule} from "./pages-routing.module";
import { PagesComponent } from './pages.component';
import {MatButtonModule} from "@angular/material/button";
import { AddProductComponent } from './add-edit-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';
import {FilterPipe} from "../pipes/filter.pipe";



@NgModule({
  declarations: [
    ListProductsComponent,
    PagesComponent,
    AddProductComponent,
    EditProductComponent,
    FilterPipe
  ],
  exports: [
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PagesModule { }
