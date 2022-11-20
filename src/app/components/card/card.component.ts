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
  },
  {
    nombre:"Charmander",
    descripcion:"Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Squirtle, en las ediciones Pokémon Rojo, Pokémon Verde y Pokémon Azul y Pokémon Rojo Fuego y Pokémon Verde Hoja",
    url:"https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png"
  },
  {
    nombre:"Bulbasaur",
    descripcion:"Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región de Kanto, junto a Squirtle y Charmander, en las ediciones Pokémon Rojo, Pokémon Verde y Pokémon Azul y Pokémon Rojo Fuego y Pokémon Verde Hoja.",
    url:"https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
