import {Component, OnInit} from 'angular2/core';
import {Hero, HeroService}   from './hero.service';
import {Router}              from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Component({
  template: `
  <h2>HEROES</h2>
  <ul>
    <li *ngFor="#hero of heroes"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
`
})
export class HeroListComponent implements OnInit { 
    heroes : Hero[];
    errorMessage : string;
    
    constructor(
        private _router: Router,
        private _service: HeroService,
        private _heroService: HeroService
    ){}
    
    ngOnInit() {
        //on init, the HeroService is gonna get the list of heroes
        // and defined them as the heroes used for this class. 
        this._service.getHeroes().then(heroes => this.heroes = heroes)
    }
    
      onSelect(hero: Hero) {
    this._router.navigate( ['HeroDetail', { id: hero.id }] );
  }
      
}