import { inject, Injectable } from '@angular/core';
import {
  AURORA_ABILITY,
  AURORA_ULTIMATE,
} from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  EXP,
  ABILITY_HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
  PROJECTILE_COUNT,
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { AURORA } from '../../champion/champion.interface';
import {
  AURORA_WEAPON,
  BUNNY_MEGA_BLAST,
  ECHOING_BATHBLADES,
  ICE_BLAST_ARMOR,
  PAW_PRINT_POISONER,
  RADIANT_FIELD,
  SEARING_SHORTBOW,
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
export class AuroraItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Stealth Aurora',
      desc: 'Support / Damage',
      champion: AURORA,
      weapons: [
        this.#weaponService.getWeaponByName(AURORA_WEAPON),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(ECHOING_BATHBLADES),
        this.#weaponService.getWeaponByName(PAW_PRINT_POISONER),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(AURORA_ABILITY),
        this.#abilityService.getAbilityByName(AURORA_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(EXP),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(PROJECTILE_COUNT),
        this.#attributeService.getAttributeByName(DURATION),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Helldiver Aurora',
      desc: 'Damage / AOE',
      champion: AURORA,
      weapons: [
        this.#weaponService.getWeaponByName(AURORA_WEAPON),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(SEARING_SHORTBOW),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(AURORA_ABILITY),
        this.#abilityService.getAbilityByName(AURORA_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(EXP),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Tank Aurora',
      desc: 'Tank',
      champion: AURORA,
      weapons: [
        this.#weaponService.getWeaponByName(AURORA_WEAPON),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(VORTEX_GLOVE),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(AURORA_ABILITY),
        this.#abilityService.getAbilityByName(AURORA_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(EXP),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(PROJECTILE_COUNT),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
