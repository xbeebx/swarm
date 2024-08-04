export interface Map {
  name: MapTypes;
  part: number;
  icon?: string;
  combination?: boolean;
}

export const THE_FINAL_CITY = 'The final city';
export const MATCHMAKING_ISLAND = 'Matchmaking island';
export const WAREHOUSE_DISTRICT = 'Warehouse district';
export const THE_OUTSKIRTS = 'The outskirts';
export const SUBTERRANEAN_LAB = 'Subterranean lab';
export const THE_BEACHHEAD = 'The beachhead';

export const MAPS = [
  THE_FINAL_CITY,
  MATCHMAKING_ISLAND,
  WAREHOUSE_DISTRICT,
  THE_OUTSKIRTS,
  SUBTERRANEAN_LAB,
  THE_BEACHHEAD,
] as const;

export type MapTypes = (typeof MAPS)[number];
