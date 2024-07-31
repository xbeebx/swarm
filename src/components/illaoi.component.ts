import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Augment,
  CARD_COLLECTOR,
  ULTIMATE_SPEED_UP,
  UPTIME_UPGRADE,
} from '../augment/augment.interface';
import { ILLAOI } from '../champion/champion.interface';
import { ABILITY_HASTE, DURATION } from '../passive/passive.interface';
import { RADIANT_FIELD } from '../weapon/weapon.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';

@Component({
  selector: 'swarm-illaoi',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class IllaoiComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(ILLAOI);
  override tip = {
    texts: [
      '$0',
      ' and ',
      '$1',
      ` are both critical for every Illaoi build, so focus on getting those passives first, followed by tank / damage weapons depending on what kind build you're wanting to play.`,
    ],
    items: [
      {
        item: this.passiveService.getPassiveByName(DURATION),
        type: 'passive',
      } as Item,
      {
        item: this.passiveService.getPassiveByName(ABILITY_HASTE),
        type: 'passive',
      } as Item,
    ],
  };

  override unlock = {
    texts: ['Upgrade ', '$0', ' to Level 4.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(RADIANT_FIELD),
        type: 'weapon',
      } as Item,
    ],
  };

  override objective = {
    texts: ['Reach Level 25 with Illaoi to unlock the ', '$0', ' passive.'],
    items: [
      {
        item: this.passiveService.getPassiveByName(DURATION),
        type: 'passive',
      } as Item,
    ],
  };

  override augments: Augment[] = [
    this.augmentService.getAugmentByName(ULTIMATE_SPEED_UP),
    this.augmentService.getAugmentByName(UPTIME_UPGRADE),
    this.augmentService.getAugmentByName(CARD_COLLECTOR),
  ];

  itemBuilds = this.itemBuildService.getItemBuildsByChampion(ILLAOI);
}
