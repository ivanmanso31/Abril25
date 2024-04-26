import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../-modelo/producto';
import { entorno } from '../-entorno/entorno';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url:string = `${entorno.HOST}/productos`;
  //productoCambio = new Subject<Producto[]>();


  obtenerTodos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  alta(p:Producto){
    return this.http.post(this.url,p);
  }

  eliminar(id:number):Observable<number>{
    return this.http.delete<number>(`${this.url}/${id}`);
  }

  constructor(private http:HttpClient) {}
}

