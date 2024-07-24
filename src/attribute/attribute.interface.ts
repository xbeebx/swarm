export interface Attribute {
  name: AttributeTypes;
  icon: string;
}

export const HASTE = 'Haste';
export const CRITICAL_CHANCE = 'Critical Chance';
export const DAMAGE = 'Damage';
export const AREA_SIZE = 'Area Size';
export const MAX_HEALTH = 'Max Health';
export const PROJECTILES = 'Projectiles';
export const DURATION = 'Duration';
export const MOVEMENT_SPEED = 'Movement Speed';
export const HEALTH_REGENERATION = 'Health Regeneration';
export const PICKUP_RADIUS = 'Pickup Radius';
export const ARMOR = 'Armor';
export const EXPERIENCE = 'Experience';

export const ATTRIBUTES = [
  HASTE,
  CRITICAL_CHANCE,
  DAMAGE,
  AREA_SIZE,
  MAX_HEALTH,
  PROJECTILES,
  DURATION,
  MOVEMENT_SPEED,
  HEALTH_REGENERATION,
  PICKUP_RADIUS,
  ARMOR,
  EXPERIENCE,
] as const;

export type AttributeTypes = (typeof ATTRIBUTES)[number];
