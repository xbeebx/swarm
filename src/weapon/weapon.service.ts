import { Injectable } from '@angular/core';

import {
  TIER_A,
  TIER_B,
  TIER_C,
  TIER_S,
  TierTypes,
} from '../tier/tier.interface';
import {
  ANI_MINES,
  ANTI_SHAK_SEA_MINE as ANTI_SHARK_SEA_MINE,
  AURORA_WEAPON,
  BATTLE_BUNNY_CROWBOW,
  BLADE_O_RANG,
  BRIAR_WEAPON,
  BUNNY_MEGA_BLAST,
  CYCLONIC_SLICERS,
  ECHOING_BATHBLADES as ECHOING_BATBLADES,
  FINAL_CITY_TRANSIT,
  GATLING_BUNNY_GUNS,
  ICE_BLAST_ARMOR,
  ILLAOI_WEAPON,
  JINX_WEAPON,
  LEONA_WEAPON,
  LIONESSS_LAMENT,
  PAW_PRINT_POISONER,
  RADIANT_FIELD,
  RIVEN_WEAPON,
  SEARING_SHORTBOW,
  SERAPHINE_WEAPON,
  STATIKK_SWORD,
  THE_ANNIHILATOR,
  TIBBERS,
  UWU_BLASTER,
  VORTEX_GLOVE,
  Weapon,
  WeaponTypes,
  XAYAH_WEAPON,
  YASUO_WEAPON,
  YUUMIBOT,
} from './weapon.interface';

const WEAPON_ASSETS_FOLDER = 'assets/weapons/';

@Injectable({
  providedIn: 'root',
})
export class WeaponService {
  #weapons: Weapon[] = [
    {
      name: ICE_BLAST_ARMOR,
      icon: WEAPON_ASSETS_FOLDER + 'ice_blast_armor.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'ice_blast_armor_evolve.png',
      tier: TIER_S,
    },
    {
      name: BATTLE_BUNNY_CROWBOW,
      icon: WEAPON_ASSETS_FOLDER + 'battle_bunny_crowbow.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'battle_bunny_crowbow_evolve.png',
      tier: TIER_S,
    },
    {
      name: UWU_BLASTER,
      icon: WEAPON_ASSETS_FOLDER + 'uwu_blaster.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'uwu_blaster_evolve.png',
      tier: TIER_S,
    },
    {
      name: THE_ANNIHILATOR,
      icon: WEAPON_ASSETS_FOLDER + 'the_annihilator.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'the_annihilator_evolve.png',
      tier: TIER_S,
    },
    {
      name: BUNNY_MEGA_BLAST,
      icon: WEAPON_ASSETS_FOLDER + 'bunny_mega_blast.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'bunny_mega_blast_evolve.png',
      tier: TIER_S,
    },
    {
      name: STATIKK_SWORD,
      icon: WEAPON_ASSETS_FOLDER + 'statikk_sword.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'statikk_sword_evolve.png',
      tier: TIER_S,
    },
    {
      name: RADIANT_FIELD,
      icon: WEAPON_ASSETS_FOLDER + 'radiant_field.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'radiant_field_evolve.png',
      tier: TIER_A,
    },
    {
      name: VORTEX_GLOVE,
      icon: WEAPON_ASSETS_FOLDER + 'vortex_glove.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'vortex_glove_evolve.png',
      tier: TIER_A,
    },
    {
      name: ECHOING_BATBLADES,
      icon: WEAPON_ASSETS_FOLDER + 'echoing_batblades.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'echoing_batblades_evolve.png',
      tier: TIER_A,
    },
    {
      name: ANTI_SHARK_SEA_MINE,
      icon: WEAPON_ASSETS_FOLDER + 'anti_shark_sea_mine.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'anti_shark_sea_mine_evolve.png',
      tier: TIER_A,
    },
    {
      name: CYCLONIC_SLICERS,
      icon: WEAPON_ASSETS_FOLDER + 'cyclonic_slicers.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'cyclonic_slicers_evolve.png',
      tier: TIER_A,
    },
    {
      name: ANI_MINES,
      icon: WEAPON_ASSETS_FOLDER + 'ani_mines.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'ani_mines_evolve.png',
      tier: TIER_A,
    },
    {
      name: SEARING_SHORTBOW,
      icon: WEAPON_ASSETS_FOLDER + 'searing_shortbow.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'searing_shortbow_evolve.png',
      tier: TIER_A,
    },
    {
      name: BLADE_O_RANG,
      icon: WEAPON_ASSETS_FOLDER + 'blade_o_rang.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'blade_o_rang_evolve.png',
      tier: TIER_A,
    },
    {
      name: GATLING_BUNNY_GUNS,
      icon: WEAPON_ASSETS_FOLDER + 'gatling_bunny_guns.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'gatling_bunny_guns_evolve.png',
      tier: TIER_A,
    },
    {
      name: TIBBERS,
      icon: WEAPON_ASSETS_FOLDER + 'tibbers.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'tibbers_evolve.png',
      tier: TIER_B,
    },
    {
      name: PAW_PRINT_POISONER,
      icon: WEAPON_ASSETS_FOLDER + 'paw_print_poisoner.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'paw_print_poisoner_evolve.png',
      tier: TIER_B,
    },
    {
      name: LIONESSS_LAMENT,
      icon: WEAPON_ASSETS_FOLDER + 'lionesss_lament.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'lionesss_lament_evolve.png',
      tier: TIER_B,
    },
    {
      name: YUUMIBOT,
      icon: WEAPON_ASSETS_FOLDER + 'yuumi_bot.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'yuumi_bot_evolve.png',
      tier: TIER_B,
    },
    {
      name: FINAL_CITY_TRANSIT,
      icon: WEAPON_ASSETS_FOLDER + 'final_city_transit.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'final_city_transit_evolve.png',
      tier: TIER_C,
    },
    {
      name: JINX_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'jinx_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'jinx_weapon_evolve.png',
    },
    {
      name: BRIAR_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'briar_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'briar_weapon_evolve.png',
    },
    {
      name: SERAPHINE_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'seraphine_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'seraphine_weapon_evolve.png',
    },
    {
      name: ILLAOI_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'illaoi_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'illaoi_weapon_evolve.png',
    },
    {
      name: LEONA_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'leona_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'leona_weapon_evolve.png',
    },
    {
      name: YASUO_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'yasuo_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'yasuo_weapon_evolve.png',
    },
    {
      name: RIVEN_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'riven_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'riven_weapon_evolve.png',
    },
    {
      name: XAYAH_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'xayah_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'xayah_weapon_evolve.png',
    },
    {
      name: AURORA_WEAPON,
      icon: WEAPON_ASSETS_FOLDER + 'aurora_weapon_evolve.png',
      iconEvolve: WEAPON_ASSETS_FOLDER + 'aurora_weapon_evolve.png',
    },
  ];

  getWeapons = () => {
    return this.#weapons;
  };

  getWeaponByName = (weapon: WeaponTypes) => {
    return this.#weapons.filter((w) => w.name === weapon)[0];
  };

  getWeaponsByTier = (tier: TierTypes) => {
    return this.#weapons.filter((w) => w.tier === tier);
  };
}
