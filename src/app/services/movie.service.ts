import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  ejecutarQuery(query: string){
    const url = `${ environment.apiURL }/${ query }&api_key=${ environment.apiKEY }`;
    console.log(url);
    return this.http.get(url);
  }
  reqPeliculas(){
    return this.ejecutarQuery(`discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`);
  }
  reqPeliculasPopulares(){
    return this.ejecutarQuery(`discover/movie?sort_by=popularity.desc`);
  }
  reqMejorPeliculaActual(){
    const yearActual = new Date().getFullYear();
    return this.ejecutarQuery(`discover/movie?primary_release_year=${ yearActual }&sort_by=vote_average.desc`);
  }
}
