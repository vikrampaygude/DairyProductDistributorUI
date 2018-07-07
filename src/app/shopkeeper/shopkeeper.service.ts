import { Injectable } from '@angular/core';
import { Shopkeeper } from './shopkeeper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class ShopkeeperService {

  public url = 'http://localhost:8080/api/shopkeeper';

  constructor(  private http: HttpClient) { }

  getAllShopkeepers(): Observable<Shopkeeper[]> {
    return this.http.get<Shopkeeper[]>(this.url+"/list");
  }

  getById(id: number): Observable<Shopkeeper>{
    return this.http.get<Shopkeeper>(this.url+"/"+id);
   
  }
  
  save(product: Shopkeeper) {
    if(product.id && product.id > 0)
    return this.update(product);

    const copy = this.convert(product);
    return this.http.post(this.url, copy);
  }

  update(product: Shopkeeper) {
    const copy = this.convert(product);
    return this.http.put(this.url, copy);
  }

      /**
     * Convert a returned JSON object to Campaign.
     */
    private convertItemFromServer(json: any): Shopkeeper {
      const entity: Shopkeeper = Object.assign(new Shopkeeper(0,null,null,null,null,null,0), json);
      return entity;
    }

      /**
     * Convert a Campaign to a JSON which can be sent to the server.
     */
    private convert(product: Shopkeeper): Shopkeeper {
      const copy: Shopkeeper = Object.assign({}, product);
      return copy;
  }
  

}
