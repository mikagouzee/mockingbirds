System.register(['angular2/core', 'angular2/router', './heroes/hero.service', './dashboard.component', './articles/articles-center.component', './articles/article-form.component', './tarifs/tarif.component', './contacts/contacts.component', './references/references.component', './login/logger.service', './login/login.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, dashboard_component_1, articles_center_component_1, article_form_component_1, tarif_component_1, contacts_component_1, references_component_1, logger_service_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (articles_center_component_1_1) {
                articles_center_component_1 = articles_center_component_1_1;
            },
            function (article_form_component_1_1) {
                article_form_component_1 = article_form_component_1_1;
            },
            function (tarif_component_1_1) {
                tarif_component_1 = tarif_component_1_1;
            },
            function (contacts_component_1_1) {
                contacts_component_1 = contacts_component_1_1;
            },
            function (references_component_1_1) {
                references_component_1 = references_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            // import { LoggedInRouterOutlet } from './login/loggedinoutlet.component';
            AppComponent = (function () {
                function AppComponent(_service) {
                    this._service = _service;
                    this.isLogged = false;
                    this.title = 'Mockingbird';
                    this.facebooklink = 'https://www.facebook.com/Mockingbirds-Translation-700332269993400/?fref=ts';
                    this.linkedinlink = 'https://www.linkedin.com/in/mockingbirdstranslation?authType=NAME_SEARCH&authToken=mZGs&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A298630615%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1455968297866%2Ctas%3Amock';
                }
                AppComponent.prototype.onClick = function (newState) {
                    var _this = this;
                    this._service.login(newState)
                        .then(function (isLogged) { return _this.isLogged = isLogged; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/app.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService,
                            logger_service_1.LoggerService
                        ],
                        styleUrls: ['app/styles/my-app.css']
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            //whenever the router can't match a route with the url,
                            //the dashboard page will be used as default.
                            useAsDefault: true
                        },
                        {
                            path: '/articles-center/...',
                            name: 'ArticlesCenter',
                            component: articles_center_component_1.ArticlesCenterComponent
                        },
                        {
                            path: '/tarifs',
                            name: 'Tarifs',
                            component: tarif_component_1.TarifComponent
                        },
                        {
                            path: '/references',
                            name: 'References',
                            component: references_component_1.ReferencesComponent
                        },
                        {
                            path: '/article-form',
                            name: 'ArticleForm',
                            component: article_form_component_1.ArticleFormComponent
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginFormComponent
                        },
                        {
                            path: '/contacts',
                            name: 'Contacts',
                            component: contacts_component_1.ContactsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map