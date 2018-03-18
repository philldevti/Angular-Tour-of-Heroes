import { Injectable } from '@angular/core';
import { Hero } from './modelo/hero';
import { HEROES } from './mock/mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
    this.messageService.add('HeroService: Passou 1');
   }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
