import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LEONA } from '../champion/champion.interface';
import {
  FINAL_CITY_TRANSIT,
  SEARING_SHORTBOW,
} from '../weapon/weapon.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';

@Component({
  selector: 'swarm-leona',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class LeonaComponent extends ChampionArticleComponent {
  override champ = this.championService.getChampionByName(LEONA);

  override unlock = {
    texts: ['Upgrade ', '$0', ' to Level 2.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(SEARING_SHORTBOW),
        type: 'weapon',
      } as Item,
    ],
  };

  override objective = {
    texts: ['Reach Level 25 with Leona to unlock the ', '$0', ' weapon.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(FINAL_CITY_TRANSIT),
        type: 'weapon',
      } as Item,
    ],
  };

  override itemBuilds = this.itemBuildService.getItemBuildsByChampion(LEONA);
}
