import { inject, Injectable } from '@angular/core';
import { YASUO_ABILITY, YASUO_ULTIMATE } from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  ABILITY_HASTE,
  HEALTH_REGENERATION,
  MOVEMENT_SPEED,
  PROJECTILE_COUNT,
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { YASUO } from '../../champion/champion.interface';
import {
  BATTLE_BUNNY_CROWBOW,
  BLADE_O_RANG,
  BUNNY_MEGA_BLAST,
  CYCLONIC_SLICERS,
  ICE_BLAST_ARMOR,
  PAW_PRINT_POISONER,
  UWU_BLASTER,
  YASUO_WEAPON,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { ItemBuild } from '../item-build.interface';

@Injectable({
  providedIn: 'root',
})
export class YasuoItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Frozen Ice Tornados',
      desc: 'Crit Strike / Damage',
      champion: YASUO,
      weapons: [
        this.#weaponService.getWeaponByName(YASUO_WEAPON),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(YASUO_ABILITY),
        this.#abilityService.getAbilityByName(YASUO_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(PROJECTILE_COUNT),
      ],
    },
    {
      name: 'Tornado AOE Destruction',
      desc: 'Damage Carry / AOE',
      champion: YASUO,
      weapons: [
        this.#weaponService.getWeaponByName(YASUO_WEAPON),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(CYCLONIC_SLICERS),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(YASUO_ABILITY),
        this.#abilityService.getAbilityByName(YASUO_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Speedy Singed',
      desc: 'Speed / Gold Farm',
      champion: YASUO,
      weapons: [
        this.#weaponService.getWeaponByName(YASUO_WEAPON),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
        this.#weaponService.getWeaponByName(PAW_PRINT_POISONER),
        this.#weaponService.getWeaponByName(CYCLONIC_SLICERS),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(YASUO_ABILITY),
        this.#abilityService.getAbilityByName(YASUO_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(PROJECTILE_COUNT),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(ABILITY_HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
