import { GiantBombService } from './../services/giant-bomb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-banner',
  templateUrl: './featured-banner.component.html',
  styleUrls: ['./featured-banner.component.css']
})
export class FeaturedBannerComponent implements OnInit {

  image : String;
  featuredId = "10983";
  constructor(private service: GiantBombService) { }

  ngOnInit(): void {
    console.log("featureBanner loaded!");
	  this.service.getGame(this.featuredId);
  }

}
