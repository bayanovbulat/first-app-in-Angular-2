"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HelloAngularComponent = (function () {
    function HelloAngularComponent() {
        this.greeting = 'Hello Angular 2!';
        this.name = '';
        this.resetPomodoro();
    }
    HelloAngularComponent.prototype.resetPomodoro = function () {
        var _this = this;
        this.minutes = 24;
        this.seconds = 59;
        this.buttonLabel = 'Start';
        this.isPaused = false;
        this.firstStep = false;
        this.tickStep = false;
        this.togglePause();
        setInterval(function () { return _this.tick(); }, 1000);
    };
    HelloAngularComponent.prototype.tick = function () {
        if (this.tickStep) {
            if (this.isPaused) {
                if (--this.seconds < 0) {
                    this.seconds = 59;
                    if (--this.minutes < 0) {
                        this.seconds = 59;
                        this.minutes = 24;
                    }
                }
            }
        }
    };
    HelloAngularComponent.prototype.togglePause = function () {
        if (this.buttonLabel == 'Start' && this.isPaused == true) {
            this.firstStep = true;
            this.isPaused = !this.isPaused;
        }
        this.isPaused = !this.isPaused;
        if (this.minutes < 24 || this.seconds < 59 || this.firstStep == true) {
            this.firstStep = false;
            this.buttonLabel = this.isPaused ? 'Pause' : 'Resume';
            if (this.isPaused == true) {
                this.tickStep = true;
                this.tick();
            }
        }
    };
    return HelloAngularComponent;
}());
HelloAngularComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div align=\"center\"><label>{{ greeting }} \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F:</label>\n                 <input [(ngModel)]=\"name\" placeholder=\"name\">\n                 <h1>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C {{name}}!</h1>\n\t\t\t\t <h1> {{ minutes }}:{{ seconds }} </h1>\n\t\t\t\t <p><button (click)=\"togglePause()\">{{ buttonLabel }}</button></p></div>"
    }),
    __metadata("design:paramtypes", [])
], HelloAngularComponent);
exports.HelloAngularComponent = HelloAngularComponent;
//# sourceMappingURL=app.component.js.map