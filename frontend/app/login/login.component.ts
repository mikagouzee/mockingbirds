import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers, ConnectionBackend, RequestOptions } from 'angular2/http';
import { contentHeaders } from './headers';


@Component({
  selector: 'my-login',
  templateUrl: 'app/login/login.component.html',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  providers:[
      Http,
      ConnectionBackend,
      RequestOptions
  ]
})
export class LoginFormComponent {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}