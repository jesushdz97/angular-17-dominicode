import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { environment } from "@envs/environment.development";
import { IProduct } from "@shared/models/product.interface";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products = signal<IProduct[]>([]);

  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  constructor() {
    this.getProducts();
  }

  public getProducts(): void {
    this._http.get<IProduct[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(tap((data: IProduct[]) => this.products.set(data)))
      .subscribe();
  }

  // public getProductById(id: string): void {
  //   this._http.get<IProduct>(`${this._endPoint}/${id}`)
  //     .pipe(tap((data) => this.products.set(data)))
  //     .subscribe();
  // }
}