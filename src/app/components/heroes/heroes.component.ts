import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from '../../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  hero:Hero[]=[];
  title: string = 'Heroes';
  type: string = 'heroe';
  constructor( private _heroService: HeroService, private _router: Router) { 

  }

  ngOnInit(): void {
    console.log()
    if (this._router.url === '/villains') {
      this.hero = this._heroService.getVillains();
      this.title = 'Villains';
      this.type = 'villain';
    } else{
      this.hero = this._heroService.getHeros();
    }
  }
  
}
