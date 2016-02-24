import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ArticlesService} from  './articles.service';
import {ArticlesListComponent} from './articles-list.component';
import {ArticleDetailComponent} from './article-detail.component';
import {ArticleFormComponent} from './article-form.component';

import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {XHRBackend} from 'angular2/http';
// in-memory web api imports
import {InMemoryBackendService,
        SEED_DATA}          from 'a2-in-memory-web-api/core';
import {ArticleData}          from './article-data';


@Component({
  templateUrl: 'app/articles/articles-center.component.html',
  directives: [RouterOutlet],
  providers:  [
        HTTP_PROVIDERS,
        ArticlesService,
        // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: ArticleData }) // in-mem server data
        ]
})
@RouteConfig([
    //VERY IMPORTANT : DO NOT FORGET TO DEFINE A "USEASDEFAULT" ROUTE!
    //Here, we want that user arrives on the list of articles by default
  {path:'/',         name: 'ArticlesCenter', component: ArticlesListComponent, useAsDefault:true},
  {path:'/:id',      name: 'ArticleDetail', component: ArticleDetailComponent}
])
export class ArticlesCenterComponent { }