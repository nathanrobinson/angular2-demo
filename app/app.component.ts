import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent}           from './home.component';
import {PeopleComponent}           from './people/people.component';
import {PersonComponent}           from './people/person.component';

@Component({
    selector: 'my-app',
    templateUrl: './views/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/home',        name: 'Home',       component: HomeComponent, useAsDefault: true},
  {path:'/people',        name: 'People',       component: PeopleComponent},
  {path:'/person/:id',        name: 'Person',       component: PersonComponent}
])
export class AppComponent { }
