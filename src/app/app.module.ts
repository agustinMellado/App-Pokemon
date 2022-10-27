import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PokedexComponent } from './components/Home/pokedex/pokedex.component';
import { PagesComponent } from './components/pages/pages.component';
import { CounterPickComponent } from './components/pages/counter-pick/counter-pick.component';
import { CuriosidadesComponent } from './components/pages/curiosidades/curiosidades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PokedexComponent,
    PagesComponent,
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
