import { Ability } from '../ability/ability.interface';
import { Passive } from '../passive/passive.interface';
import { ChampionTypes } from '../champion/champion.interface';
import { Weapon } from '../weapon/weapon.interface';

export interface ItemBuild {
  name: string;
  desc: string;
  champion: ChampionTypes;
  weapons: Weapon[];
  abilities: Ability[];
  passives: Passive[];
}
