import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService, Hero } from '../../service/hero.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: [
  ]
})
export class SearchHeroComponent implements OnInit {

  hero: Hero[] = [];
  villain: Hero[] = [];
  busqueda:string;

  constructor(private _activeRoute: ActivatedRoute, private _heroService:HeroService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe( params=>{
      this.busqueda = params['id'];
      this.hero = this._heroService.buscarHeroe(this.busqueda);
      this.villain = this._heroService.buscarVillain(this.busqueda);
    })
  }

}
