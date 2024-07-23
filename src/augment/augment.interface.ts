export interface Augment {
  name: AugmentTypes;
  icon: string;
  desc: string;
}

export const RAMMING_RUNNER = 'Ramming Runner';
export const CROSS_COUNTRY = 'Cross Country';

export const AUGMENTS = [RAMMING_RUNNER, CROSS_COUNTRY] as const;

export type AugmentTypes = (typeof AUGMENTS)[number];
