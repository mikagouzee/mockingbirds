System.register(['angular2/core', './articles.service', 'angular2/http', 'a2-in-memory-web-api/core', './article-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, articles_service_1, http_1, core_2, http_2, core_3, article_data_1;
    var ArticleFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (article_data_1_1) {
                article_data_1 = article_data_1_1;
            }],
        execute: function() {
            ArticleFormComponent = (function () {
                function ArticleFormComponent(_service) {
                    this._service = _service;
                    this.model = new articles_service_1.Article(18, 'Nouvel Article', 'Lorem Ipsum Whatever');
                    this.submitted = false;
                    this.active = true;
                }
                ArticleFormComponent.prototype.newArticle = function () {
                    var _this = this;
                    this.model = new articles_service_1.Article(42, '', '');
                    this.active = false;
                    this.submitted = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                ArticleFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                ArticleFormComponent.prototype.addArticle = function (title, content) {
                    console.log(title + " from -form component");
                    this._service.addArticle(title, content);
                };
                Object.defineProperty(ArticleFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                ArticleFormComponent = __decorate([
                    core_1.Component({
                        selector: 'article-form',
                        templateUrl: 'app/articles/article-form.component.html',
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            articles_service_1.ArticlesService,
                            core_2.provide(http_2.XHRBackend, { useClass: core_3.InMemoryBackendService }),
                            core_2.provide(core_3.SEED_DATA, { useClass: article_data_1.ArticleData }) // in-mem server data
                        ],
                        styleUrls: ['app/styles/article-form.css']
                    }), 
                    __metadata('design:paramtypes', [articles_service_1.ArticlesService])
                ], ArticleFormComponent);
                return ArticleFormComponent;
            })();
            exports_1("ArticleFormComponent", ArticleFormComponent);
        }
    }
});
//# sourceMappingURL=article-form.component.js.map