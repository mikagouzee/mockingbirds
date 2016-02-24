System.register(['angular2/angular2', 'angular2/router', './services/auth'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, router_1, auth_1;
    var Auth, Login;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            }],
        execute: function() {
            Auth = (function () {
                function Auth() {
                    this.token = localStorage.getItem('jwt');
                    this.user = this.token && jwt_decode(this.token);
                }
                Auth.prototype.isAuth = function () {
                    return !!this.token;
                };
                Auth.prototype.getUser = function () {
                    return this.user;
                };
                Auth.prototype.login = function (username, password) {
                    var _this = this;
                    //todo : replace the fetch method by http.post
                    //todo : transform the promise to an observable
                    return fetch('http://localhost:3001/sessions/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username, password: password
                        })
                    })
                        .then(function (response) {
                        return response.text();
                    })
                        .then(function (text) {
                        _this.token = JSON.parse(text).id_token;
                        localStorage.setItem('jwt', _this.token);
                    });
                };
                Auth.prototype.logout = function () {
                    localStorage.removeItem('jwt');
                    this.token = null;
                    this.user = null;
                };
                return Auth;
            })();
            exports_1("Auth", Auth);
            Login = (function () {
                function Login(router, auth) {
                    this.router = router;
                    this.auth = auth;
                }
                Login.prototype.login = function (event, username, password) {
                    var _this = this;
                    event.preventDefault();
                    this.auth.login(username, password).then(function () {
                        _this.router.parent.navigate('/home');
                    })
                        .catch(function (error) {
                        alert(error);
                    });
                };
                Login = __decorate([
                    angular2_1.Component({
                        selector: 'login',
                        injectables: [auth_1.Auth]
                    }),
                    angular2_1.View({
                        templateUrl: 'login/login.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof auth_1.Auth !== 'undefined' && auth_1.Auth) === 'function' && _a) || Object])
                ], Login);
                return Login;
                var _a;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=auth.component.js.map