System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ReferencesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReferencesComponent = (function () {
                //Properties
                //constructor
                function ReferencesComponent() {
                }
                ReferencesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-references',
                        template: "\n        <h2>Nos References</h2>\n        <p>Lorem Ipsum blablablablablablablabla</p>\n        <p>Ces gens ne nous trouvent pas trop mauvais !</p>\n    ",
                        directives: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReferencesComponent);
                return ReferencesComponent;
            })();
            exports_1("ReferencesComponent", ReferencesComponent);
        }
    }
});
//# sourceMappingURL=references.component.js.map