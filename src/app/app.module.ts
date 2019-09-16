import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './view/personal/persona/persona.component';
import { CargoComponent } from './view/personal/cargo/cargo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CargoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
