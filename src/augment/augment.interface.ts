export interface Augment {
  name: AugmentTypes;
  icon: string;
  desc: string;
}

export const RAMMING_RUNNER = 'Ramming Runner';
export const CROSS_COUNTRY = 'Cross Country';
export const ULTIMATE_SPEED_UP = 'Ultimate Speed Up';
export const UPTIME_UPGRADE = 'Uptime Upgrade';
export const CARD_COLLECTOR = 'Card Collector';
export const GATHERING_SPEED = 'Gathering Speed';
export const WITH_HASTE = 'With Haste';

export const AUGMENTS = [
  RAMMING_RUNNER,
  CROSS_COUNTRY,
  ULTIMATE_SPEED_UP,
  UPTIME_UPGRADE,
  CARD_COLLECTOR,
  GATHERING_SPEED,
  WITH_HASTE,
] as const;

export type AugmentTypes = (typeof AUGMENTS)[number];
