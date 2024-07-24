import { Injectable } from '@angular/core';
import {
  Ability,
  ABILITY_TYPE_NORMAL,
  ABILITY_TYPE_ULTIMATE,
  BRIAR_ABILITY,
  BRIAR_ULTIMATE,
  JINX_ABILITY,
  JINX_ULTIMATE,
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
  ];

  getAbilities = () => {
    return this.#abilities;
  };
  getAbilityByName = (ability: string) => {
    return this.#abilities.filter((w) => w.name === ability)[0];
  };
}
