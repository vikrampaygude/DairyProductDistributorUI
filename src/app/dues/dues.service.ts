import { Injectable } from '@angular/core';
import { Dues } from './dues';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' })
};

@Injectable({
  providedIn: 'root'
})
export class DuesService {

  public url = 'http://localhost:8080/api/dues';

  constructor(  private http: HttpClient) { }

  getAllDuess(): Observable<Dues[]> {
    return this.http.get<Dues[]>(this.url+"/list");
  }

  getById(id: number): Observable<Dues>{
    return this.http.get<Dues>(this.url+"/"+id);
   
  }

  getByDistributorAreaId(distributorAreaId: number): Observable<Dues[]>{
    return this.http.get<Dues[]>(this.url+"/distributorArea/"+distributorAreaId);
   
  }
  
  save(dues: Dues) {
    
  }

  update(dues: Dues) {
    const copy = this.convert(dues);
    return this.http.put(this.url, copy);
  }

      /**
     * Convert a returned JSON object to Campaign.
     */
    private convertItemFromServer(json: any): Dues {
      const entity: Dues = Object.assign(new Dues(), json);
      return entity;
    }

      /**
     * Convert a Campaign to a JSON which can be sent to the server.
     */
    private convert(dues: Dues): Dues {
      const copy: Dues = Object.assign({}, dues);
      return copy;
  }
  

}
