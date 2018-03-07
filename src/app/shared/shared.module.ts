import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderImgComponent } from './header-img/header-img.component';
import { FooterComponent } from './footer/footer.component';
import { SlideToggleDirective } from './directives/slidetoggle.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TopBarComponent, HeaderBarComponent, HeaderImgComponent, FooterComponent, SlideToggleDirective, LoaderComponent, SliderComponent],
  exports: [TopBarComponent, HeaderBarComponent, HeaderImgComponent, FooterComponent, SlideToggleDirective, LoaderComponent, SliderComponent]
})
export class SharedModule { }
