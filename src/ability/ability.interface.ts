export interface Ability {
  name: AbilityTypes;
  icon: string;
  type: AbilityTypeTypes;
}

export const JINX_ABILITY = 'Jinx Ability';
export const JINX_ULTIMATE = 'Jinx Ultimate';

export const ABILITIES = [JINX_ABILITY, JINX_ULTIMATE] as const;

export type AbilityTypes = (typeof ABILITIES)[number];

export const ABILITY_TYPE_NORMAL = 'Ability';
export const ABILITY_TYPE_ULTIMATE = 'Ultimate';

export const ABILITY_TYPES = [
  ABILITY_TYPE_NORMAL,
  ABILITY_TYPE_ULTIMATE,
] as const;

export type AbilityTypeTypes = (typeof ABILITY_TYPES)[number];
