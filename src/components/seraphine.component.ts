import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SERAPHINE } from '../champion/champion.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';
import { Item } from './champion-article/champion-article.interface';
import { PROJECTILE_COUNT } from '../passive/passive.interface';

@Component({
  selector: 'swarm-seraphine',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class SeraphineComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(SERAPHINE);
  override tip = {
    texts: [
      'When you first start playing Swarm, you may find the initial few rounds difficult. Getting defeated is not bad in Swarm early-on, as your main goal should be to get as much gold possible to upgrade your base attributes post-game.',
    ],
    items: [],
  };
  override objective = {
    texts: ['Reach Level 25 with Seraphine to unlock the ', '$0', ' passive.'],
    items: [
      {
        item: this.passiveService.getPassiveByName(PROJECTILE_COUNT),
        type: 'passive',
      } as Item,
    ],
  };
  itemBuilds = this.itemBuildService.getItemBuildsByChampion(SERAPHINE);
}
