System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Observable_1;
    var ArticlesService, Article;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ArticlesService = (function () {
                function ArticlesService(http) {
                    this.http = http;
                    this._articlesUrl = 'http://localhost:51890/api/Articles.json';
                }
                //   getArticles() { return articlesPromise; }
                ArticlesService.prototype.getArticles = function () {
                    console.log("Hi, service trying");
                    return this.http.get(this._articlesUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.getArticle = function (id) {
                    return this.http.get(this._articlesUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError)
                        .subscribe(function (articles) { return articles.filter(function (c) { return c.id === +id; })[0]; });
                };
                ArticlesService.prototype.addArticle = function (title, content) {
                    console.log(title + " from service");
                    if (!title || !content) {
                        return;
                    }
                    var body = JSON.stringify({ title: title, content: content });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._articlesUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.log("Error from service");
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ArticlesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ArticlesService);
                return ArticlesService;
            })();
            exports_1("ArticlesService", ArticlesService);
            Article = (function () {
                function Article(id, title, content) {
                    this.id = id;
                    this.title = title;
                    this.content = content;
                }
                return Article;
            })();
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=articles.service.js.map