import {Component} from 'angular2/core';
import {Person, PersonService} from './person.service';
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
      this._service.getPerson(id).subscribe(person => this.person = person.json());
      this.add = false;
    } else {
        this.add = true;
        this.person = new Person(0, "");
    }
  }
  
  addPerson() {
      this._service.addPerson(this.person).subscribe(person => {
          this.person = person.json();
          this._router.navigate(['Person', {id: this.person.Id}]);
      });
      this.add = false;
  }
  
  gotoPeople() {
    this._router.navigate(['People']);
  }
  
  removePerson() {
    this._service.removePerson(this.person);
    this.gotoPeople();
  }
}