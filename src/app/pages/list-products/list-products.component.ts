import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  cars!: any[];

  cols!: any[];

  products: any[] = [];

  searchProductControl: FormControl = new FormControl('');

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 10;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res;
    });

    this.cols = [{ field: 'Nombre del Producto', header: 'nombre' }];

    /**
     * Usando servicio de buscar productos.
     */
    this.searchProductControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.productService
          .searchProduct({ criterio: value })
          .subscribe((productos: any) => {
            this.products = productos;
          });
      });
  }

  addProduct() {
    this.router.navigate(['/products/add']);
  }

  deleteProduct(id: string) {
    swal
      .fire({
        title: '¿Estas seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: 'success',
        confirmButtonColor: 'red',
      })
      .then((resultado) => {
        if (resultado.isConfirmed) {
          this.productService.deleteProduct(id).subscribe((res: any) => {
            if (res.ok === true) {
              swal
                .fire({
                  title: 'Producto Eliminado Correctamente',
                  icon: 'success',
                  showConfirmButton: true,
                  confirmButtonText: 'Ok',
                })
                .then(() => {
                  this.productService.getProducts().subscribe((res: any) => {
                    this.products = res;
                    this.searchProductControl.setValue('');
                  });
                });
            }
          });
        }
      });
  }

  editProduct(id: string) {
    this.router.navigate(['/products/edit', id]);
  }
}
