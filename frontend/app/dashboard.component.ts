import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
})
export class DashboardComponent{

  constructor(
    private _router: Router) {
  }

 }
