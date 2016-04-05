System.register(['angular2/core', './person.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, person_service_1, router_1;
    var PeopleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PeopleComponent = (function () {
                function PeopleComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                PeopleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getPeople().subscribe(function (people) { return _this.people = people.json(); });
                };
                PeopleComponent.prototype.onSelect = function (person) {
                    this._router.navigate(['Person', { id: person.Id }]);
                };
                PeopleComponent.prototype.addPerson = function () {
                    this._router.navigate(['Person', { id: null }]);
                };
                PeopleComponent = __decorate([
                    core_1.Component({
                        templateUrl: './views/people.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, person_service_1.PersonService])
                ], PeopleComponent);
                return PeopleComponent;
            }());
            exports_1("PeopleComponent", PeopleComponent);
        }
    }
});
//# sourceMappingURL=people.component.js.map