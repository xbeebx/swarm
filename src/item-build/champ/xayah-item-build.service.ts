import { inject, Injectable } from '@angular/core';
import { XAYAH_ABILITY, XAYAH_ULTIMATE } from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  EXP,
  ABILITY_HASTE,
  MAX_HEALTH,
  PICKUP_RADIUS,
  PROJECTILE_COUNT,
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { XAYAH } from '../../champion/champion.interface';
import {
  BATTLE_BUNNY_CROWBOW,
  BUNNY_MEGA_BLAST,
  FINAL_CITY_TRANSIT,
  ICE_BLAST_ARMOR,
  SEARING_SHORTBOW,
  STATIKK_SWORD,
  THE_ANNIHILATOR,
  TIBBERS,
  UWU_BLASTER,
  XAYAH_WEAPON,
  YUUMIBOT,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { ItemBuild } from '../item-build.interface';

@Injectable({
  providedIn: 'root',
})
export class XayahItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Crit Strike Xayah',
      desc: 'Damage Carry',
      champion: XAYAH,
      weapons: [
        this.#weaponService.getWeaponByName(XAYAH_WEAPON),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(XAYAH_ABILITY),
        this.#abilityService.getAbilityByName(XAYAH_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(PICKUP_RADIUS),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(PROJECTILE_COUNT),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Feathers n´ Friends',
      desc: 'Off-Meta / Fun',
      champion: XAYAH,
      weapons: [
        this.#weaponService.getWeaponByName(XAYAH_WEAPON),
        this.#weaponService.getWeaponByName(TIBBERS),
        this.#weaponService.getWeaponByName(YUUMIBOT),
        this.#weaponService.getWeaponByName(FINAL_CITY_TRANSIT),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(XAYAH_ABILITY),
        this.#abilityService.getAbilityByName(XAYAH_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(PICKUP_RADIUS),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(DURATION),
        this.#attributeService.getPassiveByName(PROJECTILE_COUNT),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Feather Artillery',
      desc: '100 Anima / Destruction',
      champion: XAYAH,
      weapons: [
        this.#weaponService.getWeaponByName(XAYAH_WEAPON),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
        this.#weaponService.getWeaponByName(SEARING_SHORTBOW),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(XAYAH_ABILITY),
        this.#abilityService.getAbilityByName(XAYAH_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(PICKUP_RADIUS),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(EXP),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(MAX_HEALTH),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
