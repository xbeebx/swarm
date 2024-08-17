import { NgClass, NgFor, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import {
  MAPS,
  MapTypes,
  MATCHMAKING_ISLAND,
  THE_FINAL_CITY,
} from '../../map/map.interface';
import { MapService } from '../../map/map.service';
import { TooltipDirective } from '../tooltip.directive';
import {
  Item,
  TextsWithItems,
} from '../champion-article/champion-article.interface';
import { DifficultyService } from '../../difficulty/difficulty.service';
import { HARD, STORY } from '../../difficulty/difficuty.interface';
import { NavigationService, MAPS as NAV_MAPS } from '../navbar/navbar.service';

const ELEMENT_DATA = MAPS.filter((e) => e !== THE_FINAL_CITY);

@Component({
  selector: 'swarm-maps',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgStyle,
    NgClass,
    NgTemplateOutlet,
    MatTableModule,
    TooltipDirective,
  ],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss',
})
export class MapsComponent {
  mapService = inject(MapService);
  navigationService = inject(NavigationService);
  difficultyService = inject(DifficultyService);

  mapsNavigation = this.navigationService.getItemByName(NAV_MAPS);

  THE_FINAL_CITY: MapTypes = THE_FINAL_CITY;

  displayedColumns: string[] = ['Part', 'Map'];
  dataSource = ELEMENT_DATA;

  mapPartsIntro: TextsWithItems = {
    texts: [
      'There exist four different levels, or maps, each being a different part of ',
      '$0',
      '. Completing a map is required to unlock the next one.',
    ],
    items: [
      {
        item: this.mapService.getMapByName(THE_FINAL_CITY),
        type: 'map',
      } as Item,
    ],
  };

  mapPartsDesc: TextsWithItems = {
    texts: [
      'Upon finishing all maps in the ',
      '$0',
      ' difficulty, the matchmade queue becomes available, termed the ',
      '$1',
      '. In the matchmade queue, players can enter a public game as a party of 1–3, on a random level. The matchmade queue is played exclusively on ',
      '$2',
      ' difficulty.',
    ],
    items: [
      {
        item: this.difficultyService.getDifficultyByName(STORY),
        type: 'difficulty',
      } as Item,
      {
        item: this.mapService.getMapByName(MATCHMAKING_ISLAND),
        type: 'map',
      } as Item,
      {
        item: this.difficultyService.getDifficultyByName(HARD),
        type: 'difficulty',
      } as Item,
    ],
  };

  matchRegex = (text: string, regex: string) => {
    return new RegExp(regex).test(text);
  };

  isDifficulty = (item: Item) => {
    return item.type === 'difficulty';
  };
  isMap = (item: Item) => {
    return item.type === 'map';
  };
}
