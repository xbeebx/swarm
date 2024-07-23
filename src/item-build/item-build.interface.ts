import { Ability } from '../ability/ability.interface';
import { Attribute } from '../attribute/attribute.interface';
import { ChampionTypes } from '../champion/champion.interface';
import { Weapon } from '../weapon/weapon.interface';

export interface ItemBuild {
  name: string;
  desc: string;
  champion: ChampionTypes;
  weapons: Weapon[];
  abilities: Ability[];
  attributes: Attribute[];
}
