import { inject, Injectable } from '@angular/core';
import {
  AURORA,
  BRIAR,
  Champion,
  ChampionTypes,
  ILLAOI,
  JINX,
  LEONA,
  RIVEN,
  SERAPHINE,
  XAYAH,
  YASUO,
} from './champion.interface';
import {
  TIER_A,
  TIER_B,
  TIER_C,
  TIER_S,
  TierTypes,
} from '../tier/tier.interface';
import { JINX_ABILITY, JINX_ULTIMATE } from '../ability/ability.interface';
import { AbilityService } from '../ability/ability.service';

const CHAMPION_ASSETS_FOLDER = 'assets/champions/';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  #abilityService = inject(AbilityService);

  #champions: Champion[] = [
    { name: BRIAR, icon: CHAMPION_ASSETS_FOLDER + 'briar.png', tier: TIER_S },
    { name: RIVEN, icon: CHAMPION_ASSETS_FOLDER + 'riven.jpg', tier: TIER_S },
    { name: XAYAH, icon: CHAMPION_ASSETS_FOLDER + 'xayah.png', tier: TIER_S },
    {
      name: JINX,
      icon: CHAMPION_ASSETS_FOLDER + 'jinx.png',
      tier: TIER_S,
      ability: this.#abilityService.getAbilityByName(JINX_ABILITY),
      ultimate: this.#abilityService.getAbilityByName(JINX_ULTIMATE),
    },
    { name: YASUO, icon: CHAMPION_ASSETS_FOLDER + 'yasuo.jpg', tier: TIER_A },
    { name: LEONA, icon: CHAMPION_ASSETS_FOLDER + 'leona.png', tier: TIER_A },
    {
      name: SERAPHINE,
      icon: CHAMPION_ASSETS_FOLDER + 'seraphine.jpg',
      tier: TIER_A,
    },
    { name: ILLAOI, icon: CHAMPION_ASSETS_FOLDER + 'illaoi.png', tier: TIER_B },
    { name: AURORA, icon: CHAMPION_ASSETS_FOLDER + 'aurora.png', tier: TIER_C },
  ];

  getChampions = () => {
    return this.#champions;
  };

  getChampionByName = (champion: ChampionTypes) => {
    return this.#champions.filter((c) => c.name === champion)[0];
  };

  getChampionsByTier = (tier: TierTypes) => {
    return this.#champions.filter((c) => c.tier === tier);
  };
}
