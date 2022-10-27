import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PokedexComponent } from './components/pages/pokedex/pokedex.component';

import { CounterPickComponent } from './components/pages/counter-pick/counter-pick.component';
import { CuriosidadesComponent } from './components/pages/curiosidades/curiosidades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PokedexComponent,
    CounterPickComponent,
    CuriosidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
