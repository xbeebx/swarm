import { Ability } from '../ability/ability.interface';
import { TierTypes } from '../tier/tier.interface';

export interface Champion {
  name: ChampionTypes;
  icon: string;
  tier: TierTypes;
  ability?: Ability;
  ultimate?: Ability;
}

export const BRIAR = 'Briar';
export const RIVEN = 'Riven';
export const XAYAH = 'Xayah';
export const JINX = 'Jinx';
export const YASUO = 'Yasuo';
export const LEONA = 'Leona';
export const SERAPHINE = 'Seraphine';
export const ILLAOI = 'Illaoi';
export const AURORA = 'Aurora';

export const CHAMPIONS = [
  BRIAR,
  RIVEN,
  XAYAH,
  JINX,
  YASUO,
  LEONA,
  SERAPHINE,
  ILLAOI,
  AURORA,
] as const;

export type ChampionTypes = (typeof CHAMPIONS)[number];
