import { inject, Injectable } from '@angular/core';
import {
  ILLAOI_ABILITY,
  ILLAOI_ULTIMATE,
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
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { ILLAOI } from '../../champion/champion.interface';
import {
  BATTLE_BUNNY_CROWBOW,
  BUNNY_MEGA_BLAST,
  ICE_BLAST_ARMOR,
  ILLAOI_WEAPON,
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
export class IllaoiItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Illaoi Tank Build',
      desc: 'Tank',
      champion: ILLAOI,
      weapons: [
        this.#weaponService.getWeaponByName(ILLAOI_WEAPON),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(VORTEX_GLOVE),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(ILLAOI_ABILITY),
        this.#abilityService.getAbilityByName(ILLAOI_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(DURATION),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Tentacle Nightmare',
      desc: 'Damage Carry',
      champion: ILLAOI,
      weapons: [
        this.#weaponService.getWeaponByName(ILLAOI_WEAPON),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(ILLAOI_ABILITY),
        this.#abilityService.getAbilityByName(ILLAOI_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(DURATION),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Death Star Illaoi',
      desc: 'Destruction / AOE',
      champion: ILLAOI,
      weapons: [
        this.#weaponService.getWeaponByName(ILLAOI_WEAPON),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
        this.#weaponService.getWeaponByName(SEARING_SHORTBOW),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(ILLAOI_ABILITY),
        this.#abilityService.getAbilityByName(ILLAOI_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(DURATION),
        this.#attributeService.getAttributeByName(EXP),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
