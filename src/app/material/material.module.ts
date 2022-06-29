import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {TableModule} from "primeng/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    TableModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    TableModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class MaterialModule { }
