import { inject, Injectable } from '@angular/core';
import { BRIAR_ABILITY, BRIAR_ULTIMATE } from '../../ability/ability.interface';
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
  MOVEMENT_SPEED,
} from '../../passive/passive.interface';
import { PassiveService } from '../../passive/passive.service';
import { BRIAR } from '../../champion/champion.interface';
import {
  ANI_MINES,
  ANTI_SHAK_SEA_MINE,
  BATTLE_BUNNY_CROWBOW,
  BLADE_O_RANG,
  BRIAR_WEAPON,
  BUNNY_MEGA_BLAST,
  CYCLONIC_SLICERS,
  ICE_BLAST_ARMOR,
  LIONESSS_LAMENT,
  PAW_PRINT_POISONER,
  RADIANT_FIELD,
  SEARING_SHORTBOW,
  STATIKK_SWORD,
  THE_ANNIHILATOR,
  UWU_BLASTER,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { ItemBuild } from '../item-build.interface';

@Injectable({
  providedIn: 'root',
})
export class BriarItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(PassiveService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Tank AOE Briar',
      desc: 'Tank / AOE',
      champion: BRIAR,
      weapons: [
        this.#weaponService.getWeaponByName(BRIAR_WEAPON),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(BRIAR_ABILITY),
        this.#abilityService.getAbilityByName(BRIAR_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(EXP),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'UwU Briar',
      desc: 'Damage Carry',
      champion: BRIAR,
      weapons: [
        this.#weaponService.getWeaponByName(BRIAR_WEAPON),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(BRIAR_ABILITY),
        this.#abilityService.getAbilityByName(BRIAR_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(CRITICAL_CHANCE),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Starter Briar Build',
      desc: 'Tank / Beginner',
      champion: BRIAR,
      weapons: [
        this.#weaponService.getWeaponByName(BRIAR_WEAPON),
        this.#weaponService.getWeaponByName(SEARING_SHORTBOW),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(STATIKK_SWORD),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(BRIAR_ABILITY),
        this.#abilityService.getAbilityByName(BRIAR_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'Ice and Fire Briar',
      desc: 'Tank / Icy Explosions',
      champion: BRIAR,
      weapons: [
        this.#weaponService.getWeaponByName(BRIAR_WEAPON),
        this.#weaponService.getWeaponByName(ANTI_SHAK_SEA_MINE),
        this.#weaponService.getWeaponByName(ANI_MINES),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(SEARING_SHORTBOW),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(BRIAR_ABILITY),
        this.#abilityService.getAbilityByName(BRIAR_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(ARMOR),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
    {
      name: 'F1 Speed Briar',
      desc: 'Speed / Fun Off-Meta',
      champion: BRIAR,
      weapons: [
        this.#weaponService.getWeaponByName(BRIAR_WEAPON),
        this.#weaponService.getWeaponByName(PAW_PRINT_POISONER),
        this.#weaponService.getWeaponByName(BLADE_O_RANG),
        this.#weaponService.getWeaponByName(CYCLONIC_SLICERS),
        this.#weaponService.getWeaponByName(LIONESSS_LAMENT),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(BRIAR_ABILITY),
        this.#abilityService.getAbilityByName(BRIAR_ULTIMATE),
      ],
      passives: [
        this.#attributeService.getPassiveByName(MAX_HEALTH),
        this.#attributeService.getPassiveByName(HEALTH_REGENERATION),
        this.#attributeService.getPassiveByName(MOVEMENT_SPEED),
        this.#attributeService.getPassiveByName(DAMAGE),
        this.#attributeService.getPassiveByName(AREA_SIZE),
        this.#attributeService.getPassiveByName(ABILITY_HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
