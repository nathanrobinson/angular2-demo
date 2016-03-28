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
    this._service.getPeople().then(people => this.people = people);
  }
    
  onSelect(person: Person) {
    this._router.navigate( ['Person', { id: person.id }] );
  }
    
  addPerson() {
    this._router.navigate( ['Person', { id: null }] );
  }
  
  removePerson(person: Person) {
    this._service.removePerson(person);
  }
 }