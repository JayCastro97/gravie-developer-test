import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
  path: '', 
  component: FeaturedBannerComponent }, 
  {
    path: '**', 
		component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
