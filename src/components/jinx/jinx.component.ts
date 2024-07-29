import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Augment,
  CROSS_COUNTRY,
  RAMMING_RUNNER,
} from '../../augment/augment.interface';
import { JINX } from '../../champion/champion.interface';
import { VORTEX_GLOVE } from '../../weapon/weapon.interface';
import { ChampionArticleComponent } from '../champion-article/champion-article.component';
import { Item } from '../champion-article/champion-article.interface';

@Component({
  selector: 'swarm-jinx',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf],
  templateUrl: '../champion-article/champion-article.component.html',
  styleUrl: '../champion-article/champion-article.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class JinxComponent extends ChampionArticleComponent {
  override augments: Augment[] = [
    this.augmentService.getAugmentByName(RAMMING_RUNNER),
    this.augmentService.getAugmentByName(CROSS_COUNTRY),
  ];

  override itemBuilds = this.itemBuildService.getItemBuildsByChampion(JINX);
  override champ = this.championService.getChampionByName(JINX);
  override objective = {
    texts: ['Reach level 25 with Jinx to unlock the ', '$0', ' weapon.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(VORTEX_GLOVE),
        type: 'weapon',
      } as Item,
    ],
  };
}
