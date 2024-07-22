import { Ability } from '../ability/ability.interface';
import { ChampionTypes } from '../champion/champion.interface';
import { Weapon } from '../weapons/weapon.interface';

export interface ItemBuild {
  name: string;
  desc: string;
  champion: ChampionTypes;
  weapons: Weapon[];
  abilities: Ability[];
  // attributes
}
