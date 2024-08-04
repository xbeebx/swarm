import { DifficultyTypes } from '../../difficulty/difficuty.interface';

export const ENEMY_HEALTH = 'Enemy health';
export const ENEMY_ATTACK_DAMAGE = 'Enemy attack damage';
export const ENEMY_SPELL_DAMAGE = 'Enemy spell damage';
export const ALLY_GOLD_INCOME = 'Ally gold income';

export interface DifficultyElement {
  name: string;
  values: Record<DifficultyTypes, string>;
}
