import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AURORA } from '../champion/champion.interface';
import { THE_ANNIHILATOR } from '../weapon/weapon.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';
import { HARD } from '../difficulty/difficuty.interface';

@Component({
  selector: 'swarm-aurora',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass, NgStyle],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class AuroraComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(AURORA);

  override unlock = {
    texts: ['On ', '$0', ' difficulty, defeat 25 minibosses.'],
    items: [
      {
        item: this.difficultyService.getDifficultyByName(HARD),
        type: 'difficulty',
      } as Item,
    ],
  };

  override objective = {
    texts: [
      'Reach Level 35 with Aurora on any map to unlock ',
      '$0',
      `, one of Swarm's most powerful weapons.`,
    ],
    items: [
      {
        item: this.weaponService.getWeaponByName(THE_ANNIHILATOR),
        type: 'weapon',
      } as Item,
    ],
  };

  itemBuilds = this.itemBuildService.getItemBuildsByChampion(AURORA);
}
