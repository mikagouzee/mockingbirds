import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero, HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroes/hero-detail.component.html',
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit{
    public hero : Hero;
    
    constructor(
        private _router : Router,
  private _heroService: HeroService,
  private _routeParams: RouteParams) {
    }
    
      ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
}

      goBack() {
  window.history.back();
  }
  
      gotoHeroes(){
          this._router.navigate(['Heroes']);
      }
}

