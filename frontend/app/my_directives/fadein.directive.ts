import {Directive, ElementRef, Input} from 'angular2/core';
@Directive({
    selector: '[myFadeIn]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()',
    }
})
export class FadeInDirective {
    constructor(private el: ElementRef) { }
    
    isHidden = true;
    
    onMouseEnter() {this._children.isHidden= false;}
    onMouseLeave() {this._children.isHidden= true;}
    
    _children = this.el.nativeElement.children(":first"); 
    
}
