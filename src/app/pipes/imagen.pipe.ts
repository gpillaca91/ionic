import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  // tslint:disable-next-line: variable-name
  transform(movie: any, poster_path?: boolean): string {
    if (poster_path) {
      if (movie.poster_path) {
        return `${ environment.imgURL }/${ movie.poster_path }`;
      }
    }
    if (!movie) {
    return;
    }
    if (movie.backdrop_path) {
      return `${ environment.imgURL }/${ movie.backdrop_path }`;
    }else {
      return `${ environment.imgURL }/${ movie.poster_path }`;
    }
  }

}
