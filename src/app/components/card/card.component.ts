import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemons=[{
    nombre:"Vaporeon",
    descripcion:"Vaporeon es un Pokémon de tipo agua introducido en la primera generación. Es una de las ocho Eeveeluciones, es decir, las posibles evoluciones de Eevee.",
    url:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fc/latest/20210627185640/Vaporeon.png/1200px-Vaporeon.png"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
