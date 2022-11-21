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
  ngOnInit(): void {}
}
