import {
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XAYAH } from '../champion/champion.interface';
import { ChampionArticleComponent } from './champion-article/champion-article.component';

@Component({
  selector: 'swarm-xayah',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet, NgIf, NgClass, NgStyle],
  templateUrl: './champion-article/champion-article.component.html',
  styleUrl: './champion-article/champion-article.component.scss',
})
export class XayahComponent extends ChampionArticleComponent {
  champ = this.championService.getChampionByName(XAYAH);

  override unlock = {
    texts: [`On Hard difficulty, complete a total of 20 Bel'Veth Trials.`],
    items: [],
  };

  itemBuilds = this.itemBuildService.getItemBuildsByChampion(XAYAH);
}
