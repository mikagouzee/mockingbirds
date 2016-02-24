import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/heroes/hero-form.component.html'
})

export class HeroFormComponent {
    
  toto = [ 'Mega Strong', 'Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer', 'Can cook min rice in 58 sec', 'Laugh very hard'];

  model = new Hero(18, 'Dr IQ', this.toto[1], 'Chuck Overstreet');

  submitted = false;
  
  active = true;

 newHero() {
  this.model = new Hero(42, '', '', '');
  this.active = false;
  this.submitted = false;
    setTimeout(()=> this.active=true, 0);

}
 
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
}