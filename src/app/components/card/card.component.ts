
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];

  constructor(private pokemonService:PokemonService,private activatedRouter:ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {}
    getPokemon(id: any) {
      this.pokemonService.getPokemons(id).subscribe(
        res => {
          console.log(res);
          this.pokemon = res;
          this.pokemonImg = this.pokemon.sprites.front_default;
          this.pokemonType = res.types[0].type.name;
        },
        err => {
          console.log(err);
        }
      )
    }

}
