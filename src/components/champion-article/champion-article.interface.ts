import { Ability } from '../../ability/ability.interface';
import { Champion } from '../../champion/champion.interface';
import { Passive } from '../../passive/passive.interface';
import { Weapon } from '../../weapon/weapon.interface';

export type Item = {
  item: Weapon | Ability | Champion | Passive;
  type: 'weapon' | 'ability' | 'champion' | 'passive';
  link?: string;
};

export type TextsWithItems = {
  texts: string[];
  items: Item[];
};
