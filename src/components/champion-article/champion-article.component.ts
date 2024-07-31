import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Augment } from '../../augment/augment.interface';
import { AugmentService } from '../../augment/augment.service';
import { Champion } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuild } from '../../item-build/item-build.interface';
import { ItemBuildService } from '../../item-build/item-build.service';
import { PassiveService } from '../../passive/passive.service';
import { UpgradeService } from '../../upgrades/upgrade.service';
import { WeaponService } from '../../weapon/weapon.service';
import { Item, TextsWithItems } from './champion-article.interface';
import { NavigationService } from '../navbar/navbar.service';
import { AbilityService } from '../../ability/ability.service';

@Component({
  selector: 'swarm-champion-article',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './champion-article.component.html',
  styleUrl: './champion-article.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export abstract class ChampionArticleComponent {
  championService = inject(ChampionService);
  itemBuildService = inject(ItemBuildService);
  augmentService = inject(AugmentService);
  weaponService = inject(WeaponService);
  upgradeService = inject(UpgradeService);
  passiveService = inject(PassiveService);
  navigationService = inject(NavigationService);
  abilityService = inject(AbilityService);

  abstract champ: Champion;
  tip: TextsWithItems = {
    texts: [],
    items: [],
  };
  unlock: TextsWithItems = {
    texts: [],
    items: [],
  };
  objective: TextsWithItems = {
    texts: [],
    items: [],
  };
  augments: Augment[] = [];
  abstract itemBuilds: ItemBuild[];

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
  isPassive = (item: Item) => {
    return item.type === 'passive';
  };
}
