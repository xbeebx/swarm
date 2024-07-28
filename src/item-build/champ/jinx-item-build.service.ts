import { inject, Injectable } from '@angular/core';
import { JINX } from '../../champion/champion.interface';
import { ItemBuild } from '../item-build.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { AbilityService } from '../../ability/ability.service';
import { PassiveService } from '../../passive/passive.service';
import {
  BATTLE_BUNNY_CROWBOW,
  BLADE_O_RANG,
  BUNNY_MEGA_BLAST,
  GATLING_BUNNY_GUNS,
  ICE_BLAST_ARMOR,
  JINX_WEAPON,
  RADIANT_FIELD,
  SEARING_SHORTBOW,
  STATIKK_SWORD,
  UWU_BLASTER,
  VORTEX_GLOVE,
  YUUMIBOT,
} from '../../weapon/weapon.interface';
import { JINX_ABILITY, JINX_ULTIMATE } from '../../ability/ability.interface';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  ABILITY_HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
  PROJECTILE_COUNT,
} from '../../passive/passive.interface';

@Injectable({
  providedIn: 'root',
})
export class JinxItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Laser Beam Jinx',
      desc: 'Damage Carry',
      champion: JINX,
      weapons: [
        this.#weaponService.getWeaponByName(JINX_WEAPON),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(JINX_ABILITY),
        this.#abilityService.getAbilityByName(JINX_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(PROJECTILE_COUNT),
      ],
    },
    {
      name: 'Starter Jinx Build',
      desc: 'Beginner / Gold Farm',
      champion: JINX,
      weapons: [
        this.#weaponService.getWeaponByName(JINX_WEAPON),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(GATLING_BUNNY_GUNS),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
        this.#weaponService.getWeaponByName(SEARING_SHORTBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(JINX_ABILITY),
        this.#abilityService.getAbilityByName(JINX_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
        this.#attributeService.getAttributeByName(DURATION),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
      ],
    },
    {
      name: 'Jinx Speed Gold Farm',
      desc: 'Beginner / Gold Farm',
      champion: JINX,
      weapons: [
        this.#weaponService.getWeaponByName(JINX_WEAPON),
        this.#weaponService.getWeaponByName(YUUMIBOT),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(JINX_ABILITY),
        this.#abilityService.getAbilityByName(JINX_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(PICKUP_RADIUS),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
      ],
    },
    {
      name: 'Defensive Solo Jinx',
      desc: 'Solo / Sustain',
      champion: JINX,
      weapons: [
        this.#weaponService.getWeaponByName(JINX_WEAPON),
        this.#weaponService.getWeaponByName(VORTEX_GLOVE),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(JINX_ABILITY),
        this.#abilityService.getAbilityByName(JINX_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
