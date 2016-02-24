import {Component, Input} from 'angular2/core';

@Component({
  selector: 'accordion',
  template: '<ng-content></ng-content>',
  host: {
    'class': 'panel-group'
  }
})

export class Accordion {
  groups: Array<AccordionGroup> = [];
  
  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }
  
  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  
}
//currently seems impossible to place the template somewhere else
@Component({
  selector: 'accordion-group',
  template: `
  <div class="panel panel-default" [ngClass]="{'panel-open': isOpen}">
  <div class="panel-heading" (click)="toggleOpen($event)">
    <h4 class="panel-title">
      <a href tabindex="0"><span>{{heading}}</span></a>
    </h4>
  </div>
  <div class="panel-collapse" [hidden]="!isOpen">
    <div class="panel-body">
	    <ng-content></ng-content>
    </div>
  </div>
</div>
  `
})
export class AccordionGroup {
  private _isOpen = false;
  
  @Input() heading: string;
  
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }
  
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
  }

  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}