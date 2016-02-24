System.register(['angular2/core', 'angular2/router', './articles.service', './articles-list.component', './article-detail.component', 'angular2/http', 'a2-in-memory-web-api/core', './article-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, articles_service_1, articles_list_component_1, article_detail_component_1, http_1, core_2, http_2, core_3, article_data_1;
    var ArticlesCenterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (articles_list_component_1_1) {
                articles_list_component_1 = articles_list_component_1_1;
            },
            function (article_detail_component_1_1) {
                article_detail_component_1 = article_detail_component_1_1;
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
            ArticlesCenterComponent = (function () {
                function ArticlesCenterComponent() {
                }
                ArticlesCenterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/articles/articles-center.component.html',
                        directives: [router_1.RouterOutlet],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            articles_service_1.ArticlesService,
                            // in-memory web api providers
                            core_2.provide(http_2.XHRBackend, { useClass: core_3.InMemoryBackendService }),
                            core_2.provide(core_3.SEED_DATA, { useClass: article_data_1.ArticleData }) // in-mem server data
                        ]
                    }),
                    router_1.RouteConfig([
                        //VERY IMPORTANT : DO NOT FORGET TO DEFINE A "USEASDEFAULT" ROUTE!
                        //Here, we want that user arrives on the list of articles by default
                        { path: '/', name: 'ArticlesCenter', component: articles_list_component_1.ArticlesListComponent, useAsDefault: true },
                        { path: '/:id', name: 'ArticleDetail', component: article_detail_component_1.ArticleDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ArticlesCenterComponent);
                return ArticlesCenterComponent;
            })();
            exports_1("ArticlesCenterComponent", ArticlesCenterComponent);
        }
    }
});
//# sourceMappingURL=articles-center.component.js.map