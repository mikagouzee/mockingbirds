export class Auth {
  constructor() {
    this.token = localStorage.getItem('jwt');
    this.user = this.token && jwt_decode(this.token);
  }

  isAuth() {
    return !!this.token;
  }

  getUser() {
    return this.user;
  }

  login(username, password) {
      //todo : replace the fetch method by http.post
      //todo : transform the promise to an observable
    return fetch('http://localhost:3001/sessions/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      this.token = JSON.parse(text).id_token;
      localStorage.setItem('jwt', this.token);
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.token = null;
    this.user = null;
  }
}

//--------------------------------
//to do : replace injectables with providers
import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Auth} from './services/auth';

@Component({
  selector: 'login',
  injectables: [Auth]
})
@View({
  templateUrl: 'login/login.html'
})
export class Login {
  constructor(router: Router, auth: Auth) {
    this.router = router;
    this.auth = auth;
  }

  login(event, username, password) {
    event.preventDefault();
    this.auth.login(username, password).then(() => {
      this.router.parent.navigate('/home');
    })
    .catch((error) => {
      alert(error);
    });
  }
}