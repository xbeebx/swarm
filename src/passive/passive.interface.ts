export interface Passive {
  name: PassiveTypes;
  icon: string;
  amountPerLevel: string;
  availableByDefault: boolean;
}

export const ABILITY_HASTE = 'Ability Haste';
export const CRITICAL_CHANCE = 'Critical Chance';
export const DAMAGE = 'Damage';
export const AREA_SIZE = 'Area Size';
export const MAX_HEALTH = 'Max Health';
export const PROJECTILE_COUNT = 'Projectile Count';
export const DURATION = 'Duration';
export const MOVEMENT_SPEED = 'Movement Speed';
export const HEALTH_REGENERATION = 'Health Regeneration';
export const PICKUP_RADIUS = 'Pickup Radius';
export const ARMOR = 'Armor';
export const EXP = 'EXP';
export const GAIN_GOLD = 'Gain 25 Gold';
export const HEAL_HP = 'Heal 25% HP';

export const PASSIVES = [
  ABILITY_HASTE,
  CRITICAL_CHANCE,
  DAMAGE,
  AREA_SIZE,
  MAX_HEALTH,
  PROJECTILE_COUNT,
  DURATION,
  MOVEMENT_SPEED,
  HEALTH_REGENERATION,
  PICKUP_RADIUS,
  ARMOR,
  EXP,
  GAIN_GOLD,
  HEAL_HP,
] as const;

export type PassiveTypes = (typeof PASSIVES)[number];
