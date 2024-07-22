import { inject, Injectable } from '@angular/core';
import { ItemBuild } from './item-build.interface';
import { ChampionTypes, JINX } from '../champion/champion.interface';
import { WeaponService } from '../weapons/weapon.service';
import {
  BATTLE_BUNNY_CROWBOW,
  BUNNY_MEGA_BLAST,
  JINX_WEAPON,
  STATIKK_SWORD,
  UWU_BLASTER,
} from '../weapons/weapon.interface';
import { AbilityService } from '../ability/ability.service';
import { JINX_ABILITY, JINX_ULTIMATE } from '../ability/ability.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemBuildService {
  #weaponService = inject(WeaponService);
  #abilityService = inject(AbilityService);
  #itemBuilds: ItemBuild[] = [];

  constructor() {
    this.#itemBuilds = this.#itemBuilds.concat(this.#generateJinxItemBuilds());
    console.log('executed', this.#itemBuilds);
  }

  #generateJinxItemBuilds = () => {
    const itemBuilds: ItemBuild[] = [
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
      },
    ];

    return itemBuilds;
  };

  getItemBuildsByChampion = (champion: ChampionTypes) => {
    console.log('inc', champion);
    console.log(
      'filtered',
      this.#itemBuilds.filter((b) => b.champion === champion)
    );
    console.log(this.#itemBuilds);
    return this.#itemBuilds.filter((b) => b.champion === champion);
  };
}
