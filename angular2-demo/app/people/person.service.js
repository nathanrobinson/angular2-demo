System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Person, PersonService, SERVICE_URL;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Person = (function () {
                function Person(Id, Name) {
                    this.Id = Id;
                    this.Name = Name;
                }
                return Person;
            }());
            exports_1("Person", Person);
            PersonService = (function () {
                function PersonService(_http) {
                    this._http = _http;
                }
                PersonService.prototype.getPeople = function () {
                    return this._http.get(SERVICE_URL); //.map(res => res.json()); 
                };
                PersonService.prototype.getPerson = function (id) {
                    return this._http.get(SERVICE_URL + '/' + (+id)); //.map(res => res.json());
                };
                PersonService.prototype.removePerson = function (person) {
                    return this._http.delete(SERVICE_URL + '/' + person.Id); //.map(res => res.json());
                };
                PersonService.prototype.addPerson = function (person) {
                    return this._http.post(SERVICE_URL, JSON.stringify(person)); //.map(res => res.json());
                };
                PersonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PersonService);
                return PersonService;
            }());
            exports_1("PersonService", PersonService);
            SERVICE_URL = 'http://localhost:5000/api/people';
        }
    }
});
//# sourceMappingURL=person.service.js.map