import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { HeaderComponent } from './header/header.component';
import { SlideShowComponent } from './slide-show/slide-show.component';



@NgModule({
  declarations: [
    ExploreContainerComponent,
    HeaderComponent,
    SlideShowComponent
  ],
  exports: [
    HeaderComponent,
    SlideShowComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
