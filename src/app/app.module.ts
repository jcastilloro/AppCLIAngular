import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './view/personal/persona/persona.component';
import { CargoComponent } from './view/personal/cargo/cargo.component';
import { ContratoComponent } from './view/personal/contrato/contrato.component';
import { EstablecimientoComponent } from './view/personal/establecimiento/establecimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CargoComponent,
    ContratoComponent,
    EstablecimientoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
