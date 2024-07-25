import { inject, Injectable } from '@angular/core';
import { LEONA_ABILITY, LEONA_ULTIMATE } from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  EXPERIENCE,
  HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  PROJECTILES,
} from '../../attribute/attribute.interface';
import { AttributeService } from '../../attribute/attribute.service';
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
  #attributeService = inject(AttributeService);

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
      attributes: [
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(EXPERIENCE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(HASTE),
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
      attributes: [
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(EXPERIENCE),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(HASTE),
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
      attributes: [
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(PROJECTILES),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
