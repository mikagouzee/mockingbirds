import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './dashboard.component';
import { ArticlesCenterComponent} from './articles/articles-center.component';
import { ArticleFormComponent } from './articles/article-form.component';
import { TarifComponent} from './tarifs/tarif.component';
import { ContactsComponent} from './contacts/contacts.component';
import { ReferencesComponent} from './references/references.component';
import { LoggerService } from './login/logger.service';
import { LoginFormComponent} from './login/login.component';
// import { LoggedInRouterOutlet } from './login/loggedinoutlet.component';


@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html" ,
  directives: [ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    LoggerService
  ],
  styleUrls: ['app/styles/my-app.css']
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    //whenever the router can't match a route with the url,
    //the dashboard page will be used as default.
    useAsDefault: true
  },
  {
      path: '/articles-center/...',
      name: 'ArticlesCenter',
      component: ArticlesCenterComponent
  },
  {
      path: '/tarifs',
      name: 'Tarifs',
      component: TarifComponent
  },
  {
      path: '/references',
      name: 'References',
      component: ReferencesComponent
  },
  {
      path: '/article-form',
      name: 'ArticleForm',
      component: ArticleFormComponent
  },
  {
      path: '/login',
      name: 'Login',
      component: LoginFormComponent
  },
  {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsComponent
  }

])
export class AppComponent {
    constructor(
        private _service: LoggerService
    ){}
    
  isLogged = false;
  title = 'Mockingbird';
  facebooklink = 'https://www.facebook.com/Mockingbirds-Translation-700332269993400/?fref=ts';
  linkedinlink = 'https://www.linkedin.com/in/mockingbirdstranslation?authType=NAME_SEARCH&authToken=mZGs&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A298630615%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1455968297866%2Ctas%3Amock';
  
  
  
  onClick(newState){
      this._service.login(newState)
                    .then(isLogged => this.isLogged = isLogged);
  }
}
