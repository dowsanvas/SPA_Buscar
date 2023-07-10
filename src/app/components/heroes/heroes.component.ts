import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

import {Router}from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Heroe[]=[];
  ngOnInit(): void {
    this.heroes= this._heroesServices.getHeroes();
    console.log(this.heroes);   
  }


Encontrado: Heroe | null = null;
Ver: boolean = false;

buscarHeroes(event: Event) {
  const textoBusqueda = (event.target as HTMLInputElement).value;

  // Buscar el héroe según el texto de búsqueda
  const heroe = this.heroes.find(heroe =>
    heroe.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  // Actualizar las variables de visibilidad
  this.Encontrado = heroe ? heroe : null;
  this.Ver = this.Encontrado !== null;
}


  constructor(private _heroesServices:HeroesService, private router: Router){
    
  }
  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}

