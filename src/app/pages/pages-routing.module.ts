import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListProductsComponent} from "./list-products/list-products.component";
import {PagesComponent} from "./pages.component";
import {AddProductComponent} from "./add-edit-product/add-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: 'products',
    component: PagesComponent,
    children: [
      { path: 'lista' , component: ListProductsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: '**' , redirectTo: 'lista' },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]

})

export class PagesRoutingModule {}
