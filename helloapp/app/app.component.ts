import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template: `<div align="center"><label>{{ greeting }} Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
				 <h1> {{ minutes }}:{{ seconds }} </h1>
				 <p><button (click)="togglePause()">{{ buttonLabel }}</button></p></div>`
})
export class HelloAngularComponent { 
    greeting: string;
	name: string;
	minutes: number;
	seconds: number;
	isPaused: boolean;
	firstStep: boolean;
	buttonLabel: string;
	constructor() {
		this.greeting = 'Hello Angular 2!';
		this.name = '';
		this.resetPomodoro();
	}
	resetPomodoro(): void {
		this.minutes = 24;
		this.seconds = 59;
		this.buttonLabel = 'Start';
		this.isPaused = false;
		this.firstStep = false;
		this.tickStep = false;
		this.togglePause();
		setInterval(() => this.tick(), 1000);
	}
	private tick(): void {
		if(this.tickStep){
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
	}
	togglePause(): void {
		if(this.buttonLabel=='Start' && this.isPaused == true){
			this.firstStep = true;
			this.isPaused = !this.isPaused;
		}
		this.isPaused = !this.isPaused;
		if (this.minutes < 24 || this.seconds < 59 || this.firstStep == true) {
			this.firstStep = false;
			this.buttonLabel = this.isPaused ? 'Pause': 'Resume';
			if (this.isPaused == true){
				this.tickStep = true;
				this.tick();
			}
		}
	}
}