import { inject, Injectable } from '@angular/core';
import { BRIAR_ABILITY, BRIAR_ULTIMATE } from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRIT_CHANCE,
  DAMAGE,
  EXPERIENCE,
  HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
} from '../../attribute/attribute.interface';
import { AttributeService } from '../../attribute/attribute.service';
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
  #attributeService = inject(AttributeService);

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
      attributes: [
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(EXPERIENCE),
        this.#attributeService.getAttributeByName(HASTE),
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
      attributes: [
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(CRIT_CHANCE),
        this.#attributeService.getAttributeByName(HASTE),
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
      attributes: [
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(HASTE),
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
      attributes: [
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(HASTE),
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
      attributes: [
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(MOVEMENT_SPEED),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
