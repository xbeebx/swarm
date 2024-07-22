import { Injectable } from '@angular/core';
import {
  Ability,
  ABILITY_TYPE_NORMAL,
  ABILITY_TYPE_ULTIMATE,
} from './ability.interface';

const ABILITY_ASSETS_FOLDER = 'assets/abilities/';

@Injectable({
  providedIn: 'root',
})
export class AbilityService {
  #abilities: Ability[] = [
    {
      name: 'Jinx Ability',
      icon: ABILITY_ASSETS_FOLDER + 'jinx_ability.png',
      type: ABILITY_TYPE_NORMAL,
    },
    {
      name: 'Jinx Ultimate',
      icon: ABILITY_ASSETS_FOLDER + 'jinx_ultimate.png',
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
