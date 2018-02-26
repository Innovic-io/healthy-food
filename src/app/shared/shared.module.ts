import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderImgComponent } from './header-img/header-img.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopBarComponent, HeaderBarComponent, HeaderImgComponent, FooterComponent],
  exports: [TopBarComponent, HeaderBarComponent, HeaderImgComponent, FooterComponent]
})
export class SharedModule { }
