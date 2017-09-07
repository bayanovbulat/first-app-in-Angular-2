import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template: `<label>{{ greeting }} Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
				 <h1> {{ minutes }}:{{ seconds }} </h1>
				 <p><button (click)="togglePause()">{{ buttonLabel }}</button></p>`
})
export class HelloAngularComponent { 
    greeting: string;
	name: string;
	minutes: number;
	seconds: number;
	isPaused: boolean;
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
		this.togglePause();
		this.tick();
	}
	private tick(): void {
		if (this.isPaused) {
			this.seconds = this.seconds - 1;
			if (this.seconds < 0) {
				this.minutes = this.minutes - 1;
				this.seconds = 59;
				if (this.minutes < 0) {
					this.resetPomodoro();
				}
			}
		}
	}
	togglePause(): void {
		this.isPaused = !this.isPaused;
		if (this.minutes <= 24 || this.seconds <= 59) {
			this.buttonLabel = this.isPaused ? 'Pause': 'Resume';
			if (this.isPaused == true){
				this.tick();
			}
		}
	}
}