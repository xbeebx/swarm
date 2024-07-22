export interface Tier {
  name: TierTypes;
  color: string;
}

export const TIER_S = 'S';
export const TIER_A = 'A';
export const TIER_B = 'B';
export const TIER_C = 'C';

export const TIERS = [TIER_S, TIER_A, TIER_B, TIER_C] as const;

export type TierTypes = (typeof TIERS)[number];
