import { inject, Injectable } from '@angular/core';
import {
  SERAPHINE_ABILITY,
  SERAPHINE_ULTIMATE,
} from '../../ability/ability.interface';
import { AbilityService } from '../../ability/ability.service';
import {
  AREA_SIZE,
  ARMOR,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  EXPERIENCE,
  HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  PROJECTILES,
} from '../../attribute/attribute.interface';
import { AttributeService } from '../../attribute/attribute.service';
import { SERAPHINE } from '../../champion/champion.interface';
import {
  ANI_MINES,
  BATTLE_BUNNY_CROWBOW,
  BUNNY_MEGA_BLAST,
  CYCLONIC_SLICERS,
  GATLING_BUNNY_GUNS,
  ICE_BLAST_ARMOR,
  RADIANT_FIELD,
  SERAPHINE_WEAPON,
  THE_ANNIHILATOR,
  UWU_BLASTER,
  VORTEX_GLOVE,
} from '../../weapon/weapon.interface';
import { WeaponService } from '../../weapon/weapon.service';
import { ItemBuild } from '../item-build.interface';

@Injectable({
  providedIn: 'root',
})
export class SeraphineItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #attributeService = inject(AttributeService);

  #itemBuilds: ItemBuild[] = [
    {
      name: 'Chaotic Symphony',
      desc: 'Beginner',
      champion: SERAPHINE,
      weapons: [
        this.#weaponService.getWeaponByName(SERAPHINE_WEAPON),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(ANI_MINES),
        this.#weaponService.getWeaponByName(GATLING_BUNNY_GUNS),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(SERAPHINE_ABILITY),
        this.#abilityService.getAbilityByName(SERAPHINE_ULTIMATE),
      ],
      attributes: [
        this.#attributeService.getAttributeByName(PROJECTILES),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(DURATION),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(HASTE),
      ],
    },
    {
      name: 'Musical Destruction',
      desc: 'Damage Carry',
      champion: SERAPHINE,
      weapons: [
        this.#weaponService.getWeaponByName(SERAPHINE_WEAPON),
        this.#weaponService.getWeaponByName(BUNNY_MEGA_BLAST),
        this.#weaponService.getWeaponByName(UWU_BLASTER),
        this.#weaponService.getWeaponByName(BATTLE_BUNNY_CROWBOW),
        this.#weaponService.getWeaponByName(THE_ANNIHILATOR),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(SERAPHINE_ABILITY),
        this.#abilityService.getAbilityByName(SERAPHINE_ULTIMATE),
      ],
      attributes: [
        this.#attributeService.getAttributeByName(PROJECTILES),
        this.#attributeService.getAttributeByName(CRITICAL_CHANCE),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(EXPERIENCE),
        this.#attributeService.getAttributeByName(AREA_SIZE),
        this.#attributeService.getAttributeByName(HASTE),
      ],
    },
    {
      name: 'Survival Seraphine',
      desc: 'Light Tank / AOE',
      champion: SERAPHINE,
      weapons: [
        this.#weaponService.getWeaponByName(SERAPHINE_WEAPON),
        this.#weaponService.getWeaponByName(ICE_BLAST_ARMOR),
        this.#weaponService.getWeaponByName(RADIANT_FIELD),
        this.#weaponService.getWeaponByName(VORTEX_GLOVE),
        this.#weaponService.getWeaponByName(CYCLONIC_SLICERS),
      ],
      abilities: [
        this.#abilityService.getAbilityByName(SERAPHINE_ABILITY),
        this.#abilityService.getAbilityByName(SERAPHINE_ULTIMATE),
      ],
      attributes: [
        this.#attributeService.getAttributeByName(PROJECTILES),
        this.#attributeService.getAttributeByName(HEALTH_REGENERATION),
        this.#attributeService.getAttributeByName(MAX_HEALTH),
        this.#attributeService.getAttributeByName(DAMAGE),
        this.#attributeService.getAttributeByName(ARMOR),
        this.#attributeService.getAttributeByName(HASTE),
      ],
    },
  ];

  getItemBuilds = () => {
    return this.#itemBuilds;
  };
}
