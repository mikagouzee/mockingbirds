//BEFORE USE, DO NOT FORGET TO ADD [hidden]="isHidden" to elem

import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[myToggle]',
    host: {
        '(click)': 'toggle(!isHidden)'
    }
})
export class ToggleDirective {
    constructor(private el: ElementRef) { }
    
    isHidden = true;
    toggle(newState){
        this.isHidden = newState;
    }
    
}

