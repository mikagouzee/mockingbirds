System.register(['angular2/core', './articles.service', 'angular2/router', '../dialog.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, articles_service_1, router_1, dialog_service_1;
    var ArticleDetailComponent;
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
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            ArticleDetailComponent = (function () {
                function ArticleDetailComponent(_service, _router, _routeParams, _dialog) {
                    this._service = _service;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._dialog = _dialog;
                }
                ArticleDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._service.getArticle(id).then(function (article) {
                        if (article) {
                            _this.editName = article.name;
                            _this.article = article;
                        }
                        else {
                            _this.gotoArticles();
                        }
                    });
                };
                ArticleDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
                    if (!this.article || this.article.name === this.editName) {
                        return true;
                    }
                    // Otherwise ask the user with the dialog service and return its
                    // promise which resolves to true or false when the user decides
                    return this._dialog.confirm('Discard changes?');
                };
                ArticleDetailComponent.prototype.cancel = function () {
                    this.editName = this.article.name;
                    this.gotoArticles();
                };
                ArticleDetailComponent.prototype.save = function () {
                    this.article.name = this.editName;
                    this.gotoArticles();
                };
                ArticleDetailComponent.prototype.gotoArticles = function () {
                    // Like <a [routerLink]="['CrisisCenter']">Crisis Center</a
                    this._router.navigate(['ArticlesCenter']);
                };
                ArticleDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n  <div *ngIf=\"article\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{article.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"save()\">Save</button>\n    <button (click)=\"cancel()\">Cancel</button>\n  </div>\n  ",
                        styles: ['input {width: 20em}'],
                        providers: [dialog_service_1.DialogService]
                    }), 
                    __metadata('design:paramtypes', [articles_service_1.ArticlesService, router_1.Router, router_1.RouteParams, dialog_service_1.DialogService])
                ], ArticleDetailComponent);
                return ArticleDetailComponent;
            })();
            exports_1("ArticleDetailComponent", ArticleDetailComponent);
        }
    }
});
//# sourceMappingURL=article-detail.component.js.map