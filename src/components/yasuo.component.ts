import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BRIAR, YASUO } from '../champion/champion.interface';
import { BATTLE_BUNNY_CROWBOW } from '../weapon/weapon.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';
import { SUBTERRANEAN_LAB } from '../map/map.interface';

@Component({
  selector: 'swarm-yasuo',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass, NgStyle],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class YasuoComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(YASUO);

  override unlock = {
    texts: [
      `Defeat Bel'Veth on `,
      '$0',
      ' (3rd map). ',
      '$1',
      ' is the best champion to use on this map for new players.',
    ],
    items: [
      {
        item: this.mapService.getMapByName(SUBTERRANEAN_LAB),
        type: 'map',
      } as Item,
      {
        item: this.championService.getChampionByName(BRIAR),
        type: 'champion',
        link: this.navigationService.getItemByName(BRIAR).link,
      } as Item,
    ],
  };

  override objective = {
    texts: ['Reach Level 30 with Yasuo to unlock the ', '$0', ' weapon.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
        type: 'weapon',
      } as Item,
    ],
  };

  itemBuilds = this.itemBuildService.getItemBuildsByChampion(YASUO);
}
