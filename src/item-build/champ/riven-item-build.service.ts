import { inject, Injectable } from '@angular/core';
import { RIVEN_ABILITY, RIVEN_ULTIMATE } from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  EXP,
  ABILITY_HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { RIVEN } from '../../champion/champion.interface';
import {
  ANI_MINES,
  BATTLE_BUNNY_CROWBOW,
  BLADE_O_RANG,
  BUNNY_MEGA_BLAST,
  CYCLONIC_SLICERS,
  ICE_BLAST_ARMOR,
  PAW_PRINT_POISONER,
  RADIANT_FIELD,
  RIVEN_WEAPON,
  THE_ANNIHILATOR,
  UWU_BLASTER,
  YUUMIBOT,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { ItemBuild } from '../item-build.interface';

@Injectable({
  providedIn: 'root',
})
export class RivenItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Crit Strike Riven',
      desc: 'Damage Carry',
      champion: RIVEN,
      weapons: [
        this.#weaponService.getWeaponByName(RIVEN_WEAPON),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(RIVEN_ABILITY),
        this.#abilityService.getAbilityByName(RIVEN_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MOVEMENT_SPEED),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(DURATION),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'F1 Riven',
      desc: 'Speed / Damage',
      champion: RIVEN,
      weapons: [
        this.#weaponService.getWeaponByName(RIVEN_WEAPON),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
        this.#weaponService.getWeaponByName(PAW_PRINT_POISONER),
        this.#weaponService.getWeaponByName(ANI_MINES),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(RIVEN_ABILITY),
        this.#abilityService.getAbilityByName(RIVEN_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MOVEMENT_SPEED),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(DURATION),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Tank Riven',
      desc: 'Speed / Tank',
      champion: RIVEN,
      weapons: [
        this.#weaponService.getWeaponByName(RIVEN_WEAPON),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(CYCLONIC_SLICERS),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(RIVEN_ABILITY),
        this.#abilityService.getAbilityByName(RIVEN_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MOVEMENT_SPEED),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Gold Pirate Riven',
      desc: 'Speed Gold Farming',
      champion: RIVEN,
      weapons: [
        this.#weaponService.getWeaponByName(RIVEN_WEAPON),
        this.#weaponService.getWeaponByName(YUUMIBOT),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
        this.#weaponService.getWeaponByName(PAW_PRINT_POISONER),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(RIVEN_ABILITY),
        this.#abilityService.getAbilityByName(RIVEN_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MOVEMENT_SPEED),
        this.#attributeService.getPassiveByName(PICKUP_RADIUS),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(EXP),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
