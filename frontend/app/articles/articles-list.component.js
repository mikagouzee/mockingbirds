System.register(['angular2/core', './articles.service', 'angular2/router', './accordion/accordion.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, articles_service_1, router_1, accordion_component_1;
    var ArticlesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (accordion_component_1_1) {
                accordion_component_1 = accordion_component_1_1;
            }],
        execute: function() {
            ArticlesListComponent = (function () {
                function ArticlesListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this.isHidden = true;
                    this.isOn = false;
                    this._selectedId = +routeParams.get('id');
                }
                ArticlesListComponent.prototype.toggle = function (event) {
                    event.preventDefault();
                    this.isHidden = !this.isHidden;
                };
                ArticlesListComponent.prototype.isSelected = function (article) { return article.id === this._selectedId; };
                //   ngOnInit() {
                //     this._service.getArticles()
                //     .subscribe(articles => this.articles = articles);
                //   }
                ArticlesListComponent.prototype.ngOnInit = function () {
                    this.getArticles();
                };
                ArticlesListComponent.prototype.getArticles = function () {
                    var _this = this;
                    this._service.getArticles()
                        .subscribe(function (articles) { return _this.articles = articles; }, function (error) { return _this.errorMessage = error; });
                };
                ArticlesListComponent.prototype.addArticle = function (title, content) {
                    var _this = this;
                    console.log(title + "from -list component");
                    if (!title || !content) {
                        return;
                    }
                    this._service.addArticle(title, content)
                        .subscribe(function (article) { return _this.articles.push(article); }, function (error) { return _this.errorMessage = error; });
                };
                ArticlesListComponent.prototype.onSelect = function (article) {
                    this._router.navigate(['ArticleDetail', { id: article.id }]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ArticlesListComponent.prototype, "isHidden", void 0);
                ArticlesListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/articles/articles-list.component.html',
                        directives: [accordion_component_1.Accordion, accordion_component_1.AccordionGroup],
                        styles: ["\n    .active {\n        display:block;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [articles_service_1.ArticlesService, router_1.Router, router_1.RouteParams])
                ], ArticlesListComponent);
                return ArticlesListComponent;
            })();
            exports_1("ArticlesListComponent", ArticlesListComponent);
        }
    }
});
//# sourceMappingURL=articles-list.component.js.map