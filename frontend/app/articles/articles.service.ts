import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticlesService {
  constructor (private http: Http){}
  
  private _articlesUrl = 'http://localhost:51890/api/Articles.json';
    
//   getArticles() { return articlesPromise; }
  
  getArticles(){
      console.log("Hi, service trying");
      return this.http.get(this._articlesUrl)
                    .map(res => <Article[]> res.json().data)
                    .catch(this.handleError);
  }

  getArticle(id: number | string) {
    return this.http.get(this._articlesUrl)
                    .map(res => <Article[]> res.json().data)
                    .catch(this.handleError)
                    .subscribe(articles => articles.filter(c => c.id === +id)[0])
                   
  }
  
  addArticle(title: string, content: string) : Observable<Article>{
      console.log(title + " from service");
      if (!title || !content){return;}
      let body = JSON.stringify({title, content});
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers : headers});
      
      return this.http.post(this._articlesUrl, body, options)
                        .map(res => <Article> res.json().data)
                        .catch(this.handleError);
  }
  
  
  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.log("Error from service");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}



export class Article {
  constructor(public id: number, public title: string, public content:string) { }
}