import { Ability } from '../../ability/ability.interface';
import { Boss } from '../../boss/boss.interface';
import { Champion } from '../../champion/champion.interface';
import { Difficulty } from '../../difficulty/difficuty.interface';
import { Map } from '../../map/map.interface';
import { Passive } from '../../passive/passive.interface';
import { Upgrade } from '../../upgrade/upgrade.interface';
import { Weapon } from '../../weapon/weapon.interface';

export type Item = {
  item:
    | Weapon
    | Ability
    | Champion
    | Passive
    | Difficulty
    | Map
    | Boss
    | Upgrade;
  type:
    | 'weapon'
    | 'ability'
    | 'champion'
    | 'passive'
    | 'difficulty'
    | 'map'
    | 'boss'
    | 'upgrade';
  link?: string;
};

export type TextsWithItems = {
  texts: string[];
  items: Item[];
};
