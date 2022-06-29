import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup = this.fb.group({
    nombre: ['' ],
    precio: ['' ]
  });
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProduct( ) {
    const body = {
        "nombre": this.productForm.get('nombre')?.value,
        "precio": this.productForm.get('precio')?.value,
    }
    console.log( this.productForm.value );
    this.productService.addProduct( body )
      .subscribe(
        (response: any) => {
          console.log(response);
          if ( response.ok === true ) {
            swal.fire({
              title: "Producto Agregado Correctamente",
              icon: "success",
              showConfirmButton: true,
              confirmButtonText: "Ok",
            }).then(() => {
                this.router.navigate(['/products/lista'])
            })
          }
        }
      )
  }

}
