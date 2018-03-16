import { Injectable } from '@angular/core';
import { Hero } from './modelo/hero';
import { HEROES } from './mock/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
