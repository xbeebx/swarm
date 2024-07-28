import { Injectable } from '@angular/core';
import {
  Ability,
  ABILITY_TYPE_NORMAL,
  ABILITY_TYPE_ULTIMATE,
  AURORA_ABILITY,
  AURORA_ULTIMATE,
  BRIAR_ABILITY,
  BRIAR_ULTIMATE,
  ILLAOI_ABILITY,
  ILLAOI_ULTIMATE,
  JINX_ABILITY,
  JINX_ULTIMATE,
  LEONA_ABILITY,
  LEONA_ULTIMATE,
  RIVEN_ABILITY,
  RIVEN_ULTIMATE,
  SERAPHINE_ABILITY,
  SERAPHINE_ULTIMATE,
  XAYAH_ABILITY,
  XAYAH_ULTIMATE,
  YASUO_ABILITY,
  YASUO_ULTIMATE,
} from './ability.interface';

const ABILITY_ASSETS_FOLDER = 'assets/abilities/';

@Injectable({
  providedIn: 'root',
})
export class AbilityService {
  #abilities: Ability[] = [
    {
      name: JINX_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'jinx_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: JINX_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'jinx_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: BRIAR_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'briar_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: BRIAR_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'briar_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: SERAPHINE_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'seraphine_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: SERAPHINE_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'seraphine_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: ILLAOI_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'illaoi_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: ILLAOI_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'illaoi_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: LEONA_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'leona_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: LEONA_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'leona_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: YASUO_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'yasuo_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: YASUO_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'yasuo_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: RIVEN_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'riven_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: RIVEN_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'riven_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: XAYAH_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'xayah_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: XAYAH_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'xayah_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
    {
      name: AURORA_ABILITY,
      icon: ABILITY_ASSETS_FOLDER + 'aurora_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: AURORA_ULTIMATE,
      icon: ABILITY_ASSETS_FOLDER + 'aurora_ultimate.png',
      type: ABILITY_TYPE_ULTIMATE,
    },
  ];

  getAbilities = () => {
    return this.#abilities;
  };
  getAbilityByName = (ability: string) => {
    return this.#abilities.filter((w) => w.name === ability)[0];
  };
}
