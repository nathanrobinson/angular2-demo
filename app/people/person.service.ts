import {Injectable} from 'angular2/core';
export class Person {
  constructor(public id: number, public name: string) { }
}
@Injectable()
export class PersonService {
  getPeople() { return peoplePromise; }
  getPerson(id: number | string) {
    return peoplePromise
      .then(people => people.filter(h => h.id === +id)[0]);
  }
  removePerson(person: Person){
      peoplePromise.then(people => people.splice(people.indexOf(person), 1));
  }
  addPerson(person: Person){
      let newId = Math.max.apply(null, PEOPLE.map(person => person.id)) + 1;
      person.id = newId;
      peoplePromise.then(people => people.push(person));
      return person;
  }
}
var PEOPLE = [
    new Person(11, 'Mr. Nice'),
    new Person(12, 'Narco'),
    new Person(13, 'Bombasto'),
    new Person(14, 'Celeritas'),
    new Person(15, 'Magneta'),
    new Person(16, 'RubberMan')
];
var peoplePromise = Promise.resolve(PEOPLE);