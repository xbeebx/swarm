import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BRIAR_ULTIMATE } from '../ability/ability.interface';
import { BRIAR, JINX, LEONA } from '../champion/champion.interface';
import { ANTI_SHAK_SEA_MINE } from '../weapon/weapon.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';

@Component({
  selector: 'swarm-briar',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class BriarComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(BRIAR);

  override tip = {
    texts: [
      'You can use ',
      '$0',
      ' to fly anywhere across the map. Place your cursor where you want to go on your mini-map as you use ',
      '$1',
      '.',
    ],
    items: [
      {
        item: this.abilityService.getAbilityByName(BRIAR_ULTIMATE),
        type: 'ability',
      } as Item,
      {
        item: this.abilityService.getAbilityByName(BRIAR_ULTIMATE),
        type: 'ability',
      } as Item,
    ],
  };

  override unlock = {
    texts: [
      'Defeat Briar on The Outskirts map (2nd map). ',
      '$0',
      ' and ',
      '$1',
      ' are both strong on this map.',
    ],
    items: [
      {
        item: this.championService.getChampionByName(JINX),
        type: 'champion',
      } as Item,
      {
        item: this.championService.getChampionByName(LEONA),
        type: 'champion',
      } as Item,
    ],
  };

  override objective = {
    texts: ['Reach level 30 with Briar to unlock the ', '$0', ' weapon.'],
    items: [
      {
        item: this.weaponService.getWeaponByName(ANTI_SHAK_SEA_MINE),
        type: 'weapon',
      } as Item,
    ],
  };

  itemBuilds = this.itemBuildService.getItemBuildsByChampion(BRIAR);
}
