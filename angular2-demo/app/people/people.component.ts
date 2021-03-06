import {Component} from 'angular2/core';
import {Person, PersonService} from './person.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  templateUrl: './views/people.html'
})
export class PeopleComponent {
  people: Person[];
  
  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:PersonService){}
    
  ngOnInit() {
    this._service.getPeople().subscribe(people => this.people = people.json());
  }
    
  onSelect(person: Person) {
    this._router.navigate( ['Person', { id: person.Id }] );
  }
    
  addPerson() {
    this._router.navigate( ['Person', { id: null }] );
  }
 }