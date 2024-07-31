import { inject, Injectable } from '@angular/core';
import { LEONA_ABILITY, LEONA_ULTIMATE } from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  EXP,
  ABILITY_HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  PROJECTILE_COUNT,
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { LEONA } from '../../champion/champion.interface';
import {
  BATTLE_BUNNY_CROWBOW,
  BUNNY_MEGA_BLAST,
  CYCLONIC_SLICERS,
  ICE_BLAST_ARMOR,
  LEONA_WEAPON,
  RADIANT_FIELD,
  STATIKK_SWORD,
  THE_ANNIHILATOR,
  UWU_BLASTER,
  VORTEX_GLOVE,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { ItemBuild } from '../item-build.interface';

@Injectable({
  providedIn: 'root',
})
export class LeonaItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Tank AOE Leona',
      desc: 'Tank / AOE',
      champion: LEONA,
      weapons: [
        this.#weaponService.getWeaponByName(LEONA_WEAPON),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(CYCLONIC_SLICERS),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(LEONA_ABILITY),
        this.#abilityService.getAbilityByName(LEONA_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(EXP),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Immortal Sun God',
      desc: 'Tank / Support',
      champion: LEONA,
      weapons: [
        this.#weaponService.getWeaponByName(LEONA_WEAPON),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(LEONA_ABILITY),
        this.#abilityService.getAbilityByName(LEONA_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(EXP),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Sun´s n Gun´s',
      desc: 'Tank / Damage',
      champion: LEONA,
      weapons: [
        this.#weaponService.getWeaponByName(LEONA_WEAPON),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
        this.#weaponService.getWeaponByName(VORTEX_GLOVE),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(LEONA_ABILITY),
        this.#abilityService.getAbilityByName(LEONA_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(PROJECTILE_COUNT),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
