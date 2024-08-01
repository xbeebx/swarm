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
      `On Hard difficulty, defeat Rek'Sai on Warehouse District (1st map).`,
    ],
    items: [],
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
