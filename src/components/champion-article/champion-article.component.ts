import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Augment } from '../../augment/augment.interface';
import { AugmentService } from '../../augment/augment.service';
import { Champion } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuild } from '../../item-build/item-build.interface';
import { ItemBuildService } from '../../item-build/item-build.service';
import { WeaponService } from '../../weapon/weapon.service';
import { Item } from './champion-article.interface';

@Component({
  selector: 'swarm-champion-article',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgClass],
  templateUrl: './champion-article.component.html',
  styleUrl: './champion-article.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ChampionArticleComponent {
  championService = inject(ChampionService);
  itemBuildService = inject(ItemBuildService);
  augmentService = inject(AugmentService);
  weaponService = inject(WeaponService);

  @Input() champ!: Champion;
  @Input() itemBuilds!: ItemBuild[];
  @Input() augments: Augment[] = [];
  @Input() objective: {
    texts: string[];
    items: Item[];
  } = {
    texts: [],
    items: [],
  };

  matchRegex = (text: string, regex: string) => {
    return new RegExp(regex).test(text);
  };

  isWeapon = (item: Item) => {
    return item.type === 'weapon';
  };
  isAbility = (item: Item) => {
    return item.type === 'ability';
  };
  isChampion = (item: Item) => {
    return item.type === 'champion';
  };
}
