import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';


import { ComponentsModule } from 'src/app/components/components.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

// pipes
import { ImagenPipe } from 'src/app/pipes/imagen.pipe';
import { PeliculasParesPipe } from '../../pipes/peliculas-pares.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    Tab1PageRoutingModule,
  ],
  providers: [
  ],
  declarations: [Tab1Page, ImagenPipe, PeliculasParesPipe]
})
export class Tab1PageModule {}
