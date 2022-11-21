import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterPickComponent } from './components/pages/counter-pick/counter-pick.component';
import { CuriosidadesComponent } from './components/pages/curiosidades/curiosidades.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PokedexComponent } from './components/pages/pokedex/pokedex.component';

const routes: Routes = [
    {path: '',pathMatch:'full', redirectTo: 'home'},
    {path: 'home',component:HomeComponent},
    {path: 'pokedex', component:PokedexComponent},
    {path: 'counterPick', component:CounterPickComponent},
    {path: 'curiosidades/:id', component:CuriosidadesComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
