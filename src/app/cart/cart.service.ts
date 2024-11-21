import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://' + environment.apiUrl + '/cart';
  private apiUrlCheckout = 'http://' + environment.apiUrl + '/checkout';
  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
  checkOutCart(products: Product[]): Observable<void> {
    return this.http.post<void>(this.apiUrlCheckout, products);
  }
}