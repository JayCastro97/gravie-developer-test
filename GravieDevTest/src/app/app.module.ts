import { GiantBombService } from './services/giant-bomb.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { FeaturedCarouselComponent } from './featured-carousel/featured-carousel.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturedBannerComponent,
    FeaturedCarouselComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [  
    GiantBombService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
