import { Ability } from '../../ability/ability.interface';
import { Champion } from '../../champion/champion.interface';
import { Weapon } from '../../weapon/weapon.interface';

export type Item = {
  item: Weapon | Ability | Champion;
  type: 'weapon' | 'ability' | 'champion';
};
