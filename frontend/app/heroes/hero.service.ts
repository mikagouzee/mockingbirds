import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';


export class Hero {
  constructor( 
    public id: number,
    public name: string,
    public power?: string,
    public alterEgo? : string
  ) {}
}

@Injectable()
export class HeroService {
    constructor(){}
    
  getHeroes() {
    return Promise.resolve(HEROES);  
    }
    
        getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }

}


var HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];
