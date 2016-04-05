import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export class Person {
  constructor(public Id: number, public Name: string) { }
}

@Injectable()
export class PersonService {
  http:Http;
  people: Person[];
    
  constructor(private _http:Http) {  }

  getPeople() { 
      return this._http.get(SERVICE_URL);//.map(res => res.json()); 
  }
  getPerson(id: number | string) {
    return this._http.get(SERVICE_URL + '/' + (+id));//.map(res => res.json());
  }
  removePerson(person: Person){
      return this._http.delete(SERVICE_URL + '/' + person.Id);//.map(res => res.json());
  }
  addPerson(person: Person){      
      return this._http.post(SERVICE_URL, JSON.stringify(person));//.map(res => res.json());
  }
}
var SERVICE_URL = 'http://localhost:5000/api/people';