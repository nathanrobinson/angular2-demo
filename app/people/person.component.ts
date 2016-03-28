import {Component} from 'angular2/core';
import {Person, PersonService}   from './person.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
  templateUrl: './views/person.html',
})

export class PersonComponent { 
  constructor(
    private _routeParams:RouteParams,
    private _router:Router,
    private _service:PersonService){}
  
  person: Person;
  add: boolean;
  
  ngOnInit() {
    let id = this._routeParams.get('id');
    if(id){
      this._service.getPerson(id).then(person => this.person = person);
      this.add = false;
    } else {
        this.add = true;
        this.person = new Person(0, "");
    }
  }
  
  addPerson() {
      this.person = this._service.addPerson(this.person);
      this.add = false;
    this._router.navigate(['Person', {id: this.person.id}]);
  }
  
  gotoPeople() {
    this._router.navigate(['People']);
  }
}