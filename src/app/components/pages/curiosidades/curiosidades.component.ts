import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.component.html',
  styleUrls: ['./curiosidades.component.css'],
})
export class CuriosidadesComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
   // this.getPokemons();
   this.getAreaPokemon();
  }/*
  getPokemons() {
    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {}
      );
    }
  }*/
  getAreaPokemon(){
    this.pokemonService.getAreaPokemon().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {}
    );
  }
}
