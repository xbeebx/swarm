export interface Passive {
  name: PassiveTypes;
  icon: string;
  amountPerLevel: string;
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
] as const;

export type PassiveTypes = (typeof PASSIVES)[number];
