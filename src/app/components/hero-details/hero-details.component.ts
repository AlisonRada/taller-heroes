import { Component, OnInit } from '@angular/core';
import { HeroService ,Hero  } from '../../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

   hero:any = [];
   imgCasa:string;
   type: string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService) {
   
    this._activeRoute.params.subscribe( params=>{
     this.type = params['type'];
      if (this.type === 'heroe') {
        this.hero = this._heroService.getHero(params['id']);        
      } else{
        this.hero = this._heroService.getVillain(params['id']);
      }
    })
   }
  ngOnInit(): void {
  }
  


}
