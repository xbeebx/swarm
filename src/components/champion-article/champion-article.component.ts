import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Augment } from '../../augment/augment.interface';
import { AugmentService } from '../../augment/augment.service';
import { Champion } from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';
import { ItemBuild } from '../../item-build/item-build.interface';
import { ItemBuildService } from '../../item-build/item-build.service';
import { PassiveService } from '../../passive/passive.service';
import { UpgradeService } from '../../upgrade/upgrade.service';
import { WeaponService } from '../../weapon/weapon.service';
import { Item, TextsWithItems } from './champion-article.interface';
import { NavigationService } from '../navbar/navbar.service';
import { AbilityService } from '../../ability/ability.service';
import { DifficultyService } from '../../difficulty/difficulty.service';
import { MapService } from '../../map/map.service';
import { BossService } from '../../boss/boss.service';

@Component({
  selector: 'swarm-champion-article',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle],
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
  difficultyService = inject(DifficultyService);
  mapService = inject(MapService);
  bossService = inject(BossService);

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

  calcTipDelay = () => {
    return 0;
  };
  calcUnlockDelay = () => {
    return this.calcTipDelay() + (this.tip.texts.length ? 0.2 : 0);
  };
  calcObjectiveDelay = () => {
    return this.calcUnlockDelay() + (this.unlock.texts.length ? 0.2 : 0);
  };
  calcAugmentDelay = () => {
    return this.calcObjectiveDelay() + (this.objective.texts.length ? 0.2 : 0);
  };
  calcItemBuildDelay = () => {
    return this.calcAugmentDelay() + (this.augments.length ? 0.2 : 0);
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
  isPassive = (item: Item) => {
    return item.type === 'passive';
  };
  isDifficulty = (item: Item) => {
    return item.type === 'difficulty';
  };
  isMap = (item: Item) => {
    return item.type === 'map';
  };
  isBoss = (item: Item) => {
    return item.type === 'boss';
  };
}
