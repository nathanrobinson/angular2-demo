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
    var PersonComponent;
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
            PersonComponent = (function () {
                function PersonComponent(_routeParams, _router, _service) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._service = _service;
                }
                PersonComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    if (id) {
                        this._service.getPerson(id).subscribe(function (person) { return _this.person = person.json(); });
                        this.add = false;
                    }
                    else {
                        this.add = true;
                        this.person = new person_service_1.Person(0, "");
                    }
                };
                PersonComponent.prototype.addPerson = function () {
                    var _this = this;
                    this._service.addPerson(this.person).subscribe(function (person) {
                        _this.person = person.json();
                        _this._router.navigate(['Person', { id: _this.person.Id }]);
                    });
                    this.add = false;
                };
                PersonComponent.prototype.gotoPeople = function () {
                    this._router.navigate(['People']);
                };
                PersonComponent.prototype.removePerson = function () {
                    this._service.removePerson(this.person);
                    this.gotoPeople();
                };
                PersonComponent = __decorate([
                    core_1.Component({
                        templateUrl: './views/person.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, person_service_1.PersonService])
                ], PersonComponent);
                return PersonComponent;
            }());
            exports_1("PersonComponent", PersonComponent);
        }
    }
});
//# sourceMappingURL=person.component.js.map