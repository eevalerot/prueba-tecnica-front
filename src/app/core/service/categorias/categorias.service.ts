import { Injectable } from '@angular/core';
import { environment } from 'src/app/enviroment/enviroment';
import { EndPoints } from '../../constant/ruta';
import { Observable } from 'rxjs';
import { Catg } from '../../intefaces/catg';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any>(environment.urlCategorias.concat(EndPoints.catego))
      .toPromise()
      .then(res => res as any[])
  }

  getBusquedaCategoria(idCat: String){
    return this.http.get<any>(environment.urlCategorias.concat(EndPoints.busc).concat("/")+idCat)
    .toPromise()
    .then(res => res as any[])
  }
}
