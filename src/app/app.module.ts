import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { ListComponent } from './components/content/list/list.component';
import { appRoutes } from './app.routing';
import { DetailComponent } from './components/content/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SidebarComponent,
    ContentComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
