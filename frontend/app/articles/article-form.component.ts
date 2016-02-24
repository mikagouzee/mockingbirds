import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Article, ArticlesService }    from './articles.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {XHRBackend} from 'angular2/http';
// in-memory web api imports
import {InMemoryBackendService,
        SEED_DATA}          from 'a2-in-memory-web-api/core';
import {ArticleData}          from './article-data';



@Component({
  selector: 'article-form',
  templateUrl: 'app/articles/article-form.component.html',
  providers: [
      HTTP_PROVIDERS,
      ArticlesService,
      provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: ArticleData }) // in-mem server data
     
  ],
  styleUrls: ['app/styles/article-form.css']
})

export class ArticleFormComponent {
  constructor(
      private _service : ArticlesService
      )
  {}
   
  model = new Article(18, 'Nouvel Article', 'Lorem Ipsum Whatever');

  submitted = false;
  
  active = true;

 newArticle() {
  this.model = new Article(42, '', '');
  this.active = false;
  this.submitted = false;
    setTimeout(()=> this.active=true, 0);

}
 
  onSubmit() { this.submitted = true; }
  
  addArticle(title, content){
      console.log(title + " from -form component");
      this._service.addArticle(title, content);
  }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
}