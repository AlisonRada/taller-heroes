import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../service/hero.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

  @Input() heros: Hero;
  @Input() index: number;
  @Input() type: string;

  constructor(private _router: Router) { 
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this._router.navigate(['/detalles', this.type, this.index,]);
  }

}
