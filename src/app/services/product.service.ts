import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl + "/product";
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    const url = `${this.baseUrl}/listarProductos`;
    return this.http.get( url , { headers: this.httpHeaders});
  }

  addProduct( body: any ) {
    const url = `${this.baseUrl}/crearProducto`;
    return this.http.post( url, body, { headers: this.httpHeaders});
  }

  editProduct( body: any, id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put( url , body, { headers: this.httpHeaders});
  }

  deleteProduct(  id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete( url , { headers: this.httpHeaders});
  }

  searchProduct(
    body: {
      criterio: string;
    }
  ) {
    const url = `${this.baseUrl}/buscarProducto`;
    return this.http.post( url, body, { headers: this.httpHeaders });
  }

  getProductById( id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get( url, { headers: this.httpHeaders });

  }
}
