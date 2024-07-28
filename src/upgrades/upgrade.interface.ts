export interface Upgrade {
  name: UpgradeTypes;
  icon: string;
  increment: string;
  maxLevel: number;
}

export const DAMAGE = 'Damage';
export const ARMOR = 'Armor';
export const MAX_HEALTH = 'Max Health';
export const HEALTH_REGENERATION = 'Health Regeneration';
export const MOVEMENT_SPEED = 'Movement Speed';
export const PICKUP_RADIUS = 'Pickup Radius';
export const AREA_SIZE = 'Area Size';
export const DURATION = 'Duration';
export const CRITICAL_CHANCE = 'Critical Chance';
export const ABILITY_HASTE = 'Ability Hatse';
export const EXP = 'EXP';
export const PROJECTILE_COUNT = 'Projectile Count';
export const GOLD_MULTIPLIER = 'Gold Multiplier';
export const BATTLE_BUNNY_BOON_DURATION = 'Battle Bunny Boon Duration';
export const ANIMA_POWER = 'Anima Power';

export const UPGRADES = [
  DAMAGE,
  ARMOR,
  MAX_HEALTH,
  HEALTH_REGENERATION,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
  AREA_SIZE,
  DURATION,
  CRITICAL_CHANCE,
  ABILITY_HASTE,
  EXP,
  PROJECTILE_COUNT,
  GOLD_MULTIPLIER,
  BATTLE_BUNNY_BOON_DURATION,
  ANIMA_POWER,
] as const;

export type UpgradeTypes = (typeof UPGRADES)[number];
