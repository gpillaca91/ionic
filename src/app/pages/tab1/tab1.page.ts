import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peliculasCines: any[]  = [];
  peliculasPupulares: any[]  = [];
  PeliculaMejorAnio: any[]  = [];
  slideOpts = {
    initialSlide: 1,
    // freeMode: true,
    speed: 400
  };
  slideOptsPares = {
    slidesPerView: 3.1,
    freeMode: true,
    spaceBetween: -8
  };

  constructor(private movieervice: MovieService) {
    this.getPeliculasCines();
    this.getPeliculaPopulares();
    this.getPeliculaMejorAnio();
  }
  getPeliculasCines(){
    this.movieervice.reqPeliculas().subscribe(
      (resp: any) => {
        this.peliculasCines = resp.results;
        // console.log(resp);
      }
    );
  }
  getPeliculaPopulares(){
    this.movieervice.reqPeliculasPopulares().subscribe(
      (resp: any) => {
        this.peliculasPupulares = resp.results;
        console.log(resp);
      }
    );
  }
  getPeliculaMejorAnio(){
    this.movieervice.reqMejorPeliculaActual().subscribe(
      (resp: any) => {
        this.PeliculaMejorAnio = resp.results;
        console.log(resp);
      }
    );
  }

}
