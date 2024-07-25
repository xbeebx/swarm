import { TierTypes } from '../tier/tier.interface';

export interface Weapon {
  name: WeaponTypes;
  icon: string;
  iconEvolve?: string;
  tier?: TierTypes;
}

export const ICE_BLAST_ARMOR = 'Iceblast Armor';
export const BATTLE_BUNNY_CROWBOW = 'Battle Bunny Crowbow';
export const UWU_BLASTER = 'UwU Blaster';
export const THE_ANNIHILATOR = 'The Annihilator';
export const BUNNY_MEGA_BLAST = 'Bunny Mega-Blast';
export const STATIKK_SWORD = 'Statikk Sword';
export const RADIANT_FIELD = 'Radiant Field';
export const VORTEX_GLOVE = 'Vortex Glove';
export const ECHOING_BATHBLADES = 'Echoing Batblades';
export const ANTI_SHAK_SEA_MINE = 'Anti-Shark Sea Mine';
export const CYCLONIC_SLICERS = 'Cyclonic Slicers';
export const ANI_MINES = 'Ani-Mines';
export const SEARING_SHORTBOW = 'Searing Shortbow';
export const BLADE_O_RANG = 'Blade-o-rang';
export const GATLING_BUNNY_GUNS = 'Gatling Bunny-Guns';
export const TIBBERS = 'T.I.B.B.E.R.S';
export const PAW_PRINT_POISONER = 'Paw Print Poisoner';
export const LIONESSS_LAMENT = 'Lioness´s Lament';
export const YUUMIBOT = 'YuumiBot';
export const FINAL_CITY_TRANSIT = 'Final City Transit';
export const JINX_WEAPON = 'Jinx Weapon';
export const BRIAR_WEAPON = 'Briar Weapon';
export const SERAPHINE_WEAPON = 'Seraphine Weapon';
export const ILLAOI_WEAPON = 'Illaoi Weapon';
export const LEONA_WEAPON = 'Leona Weapon';
export const YASUO_WEAPON = 'Yasuo Weapon';

export const WEAPONS = [
  ICE_BLAST_ARMOR,
  BATTLE_BUNNY_CROWBOW,
  UWU_BLASTER,
  THE_ANNIHILATOR,
  BUNNY_MEGA_BLAST,
  STATIKK_SWORD,
  RADIANT_FIELD,
  VORTEX_GLOVE,
  ECHOING_BATHBLADES,
  ANTI_SHAK_SEA_MINE,
  CYCLONIC_SLICERS,
  ANI_MINES,
  SEARING_SHORTBOW,
  BLADE_O_RANG,
  GATLING_BUNNY_GUNS,
  TIBBERS,
  PAW_PRINT_POISONER,
  LIONESSS_LAMENT,
  YUUMIBOT,
  FINAL_CITY_TRANSIT,
  JINX_WEAPON,
  BRIAR_WEAPON,
  SERAPHINE_WEAPON,
  ILLAOI_WEAPON,
  LEONA_WEAPON,
  YASUO_WEAPON,
] as const;

export type WeaponTypes = (typeof WEAPONS)[number];
