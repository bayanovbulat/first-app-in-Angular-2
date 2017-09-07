import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HelloAngularComponent }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ HelloAngularComponent ],
    bootstrap:    [ HelloAngularComponent ]
})
export class AppModule { }