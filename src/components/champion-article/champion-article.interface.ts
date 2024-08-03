import { Ability } from '../../ability/ability.interface';
import { Champion } from '../../champion/champion.interface';
import { Difficulty } from '../../difficulty/difficuty.interface';
import { Passive } from '../../passive/passive.interface';
import { Weapon } from '../../weapon/weapon.interface';

export type Item = {
  item: Weapon | Ability | Champion | Passive | Difficulty;
  type: 'weapon' | 'ability' | 'champion' | 'passive' | 'difficulty';
  link?: string;
};

export type TextsWithItems = {
  texts: string[];
  items: Item[];
};
