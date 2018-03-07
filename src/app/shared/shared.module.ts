import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeaderImgComponent } from './components/header-img/header-img.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideToggleDirective } from './directives/slidetoggle.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopBarComponent,
    HeaderBarComponent,
    HeaderImgComponent,
    FooterComponent,
    SlideToggleDirective,
    LoaderComponent,
    SliderComponent,
    CardComponent,
    PaginationComponent
  ],
  exports: [
    TopBarComponent,
    HeaderBarComponent,
    HeaderImgComponent,
    FooterComponent,
    SlideToggleDirective,
    LoaderComponent,
    SliderComponent,
    CardComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}
