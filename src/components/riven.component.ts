import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Augment,
  GATHERING_SPEED,
  RAMMING_RUNNER,
  ULTIMATE_SPEED_UP,
  WITH_HASTE,
} from '../augment/augment.interface';
import { RIVEN } from '../champion/champion.interface';
import { PAW_PRINT_POISONER } from '../weapon/weapon.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';
import { HARD } from '../difficulty/difficuty.interface';
import { WAREHOUSE_DISTRICT } from '../map/map.interface';
import { REKSAI } from '../boss/boss.interface';

@Component({
  selector: 'swarm-riven',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass, NgStyle],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class RivenComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(RIVEN);

  override unlock = {
    texts: [
      'On ',
      '$0',
      ' difficulty, defeat ',
      '$1',
      ' on ',
      '$2',
      ' (1st map).',
    ],
    items: [
      {
        item: this.difficultyService.getDifficultyByName(HARD),
        type: 'difficulty',
      } as Item,
      {
        item: this.bossService.getBossByName(REKSAI),
        type: 'boss',
      } as Item,
      {
        item: this.mapService.getMapByName(WAREHOUSE_DISTRICT),
        type: 'map',
      } as Item,
    ],
  };

  override objective = {
    texts: ['Reach Level 35 with Riven to unlock the ', '$0', ' boots.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(PAW_PRINT_POISONER),
        type: 'weapon',
      } as Item,
    ],
  };

  override augments: Augment[] = [
    this.augmentService.getAugmentByName(RAMMING_RUNNER),
    this.augmentService.getAugmentByName(GATHERING_SPEED),
    this.augmentService.getAugmentByName(WITH_HASTE),
    this.augmentService.getAugmentByName(ULTIMATE_SPEED_UP),
  ];

  itemBuilds = this.itemBuildService.getItemBuildsByChampion(RIVEN);
}
