import {Component, OnInit, Input} from 'angular2/core';
import {Article, ArticlesService} from './articles.service';
import {Router, RouteParams} from 'angular2/router';
import {Accordion, AccordionGroup} from './accordion/accordion.component';


@Component({
  templateUrl: 'app/articles/articles-list.component.html' ,
  directives: [Accordion, AccordionGroup],
  styles:[`
    .active {
        display:block;
    }
  `]
})
export class ArticlesListComponent implements OnInit {
   constructor(
    private _service: ArticlesService,
    private _router: Router,  
    routeParams: RouteParams
    ) {
      this._selectedId = +routeParams.get('id');
  }    
    
  articles: Article[];
  errorMessage: string;
  
  private _selectedId: number;
  @Input() isHidden = true;
  isOn = false;
  
  toggle(event) {
      event.preventDefault();
      this.isHidden = !this.isHidden;
    }

isSelected(article: Article) { return article.id === this._selectedId; }

//   ngOnInit() {
//     this._service.getArticles()
//     .subscribe(articles => this.articles = articles);
//   }

  ngOnInit(){
      this.getArticles();
  }
  
  getArticles(){
      this._service.getArticles()
                        .subscribe(
                            articles => this.articles = articles,
                            error => this.errorMessage = <any>error);
  }
  
  addArticle(title: string, content:string){
      console.log(title+ "from -list component");
      if (!title || !content){return;}
      this._service.addArticle(title, content)
                    .subscribe(
                            article => this.articles.push(article),
                            error => this.errorMessage = <any>error);
  }
    
  onSelect(article: Article) {
    this._router.navigate(['ArticleDetail', { id: article.id }]  );
  }
}