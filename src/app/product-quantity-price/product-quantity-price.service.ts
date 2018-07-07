
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductQuantityPrice } from './product-quantity-price';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductQuantityPriceService {

  public url = 'http://localhost:8080/api/product-quantity-price';

  constructor(  private http: HttpClient) { }

  getProductQuantityPrices(productId: number): Observable<ProductQuantityPrice[]> {
    return this.http.get<ProductQuantityPrice[]>(this.url+"/"+productId+"/list");
  }

  getById(id: number): Observable<ProductQuantityPrice>{
    return this.http.get<ProductQuantityPrice>(this.url+"/"+id);
   
  }
  
  save(productQuantityPrice: ProductQuantityPrice) {
    if(productQuantityPrice.id && productQuantityPrice.id > 0)
    return this.update(productQuantityPrice);

    const copy = this.convert(productQuantityPrice);
    return this.http.post(this.url, copy);
  }

  update(productQuantityPrice: ProductQuantityPrice) {
    const copy = this.convert(productQuantityPrice);
    return this.http.put(this.url, copy);
  }

      /**
     * Convert a returned JSON object to Campaign.
     */
    private convertItemFromServer(json: any): ProductQuantityPrice {
      const entity: ProductQuantityPrice = Object.assign(new ProductQuantityPrice(0,0,0,0,0,null), json);
      return entity;
    }

      /**
     * Convert a Campaign to a JSON which can be sent to the server.
     */
    private convert(productQuantityPrice: ProductQuantityPrice): ProductQuantityPrice {
      const copy: ProductQuantityPrice = Object.assign({}, productQuantityPrice);
      return copy;
  }
  

}
