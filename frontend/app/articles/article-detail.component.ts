import {Component, OnInit} from 'angular2/core';
import {Article, ArticlesService} from './articles.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../dialog.service';


@Component({
  template: `
  <div *ngIf="article">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{article.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  </div>
  `,
  styles: ['input {width: 20em}'],
  providers: [DialogService]
})
export class ArticleDetailComponent implements OnInit, CanDeactivate {

  article: Article;
  editName: string;

  constructor(
    private _service: ArticlesService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.getArticle(id).then(article => {
      if (article) {
        this.editName = article.name;
        this.article = article;
      } else { // id not found
        this.gotoArticles();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.article || this.article.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this._dialog.confirm('Discard changes?');
  }

  cancel() {
    this.editName = this.article.name;
    this.gotoArticles();
  }

  save() {
    this.article.name = this.editName;
    this.gotoArticles();
  }

  gotoArticles() {
    // Like <a [routerLink]="['CrisisCenter']">Crisis Center</a
    this._router.navigate(['ArticlesCenter']);
  }
}