import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
 
 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

 
  //Obtiene pokemon
  getPokemons(index: any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  
  
} 

