import { inject, Injectable } from '@angular/core';
import { ItemBuild } from './item-build.interface';
import { ChampionTypes, JINX } from '../champion/champion.interface';
import { WeaponService } from '../weapon/weapon.service';
import { JinxItemBuildService } from './champ/jinx-item-build.service';
import { BriarItemBuildService } from './champ/briar-item-build.service';

@Injectable({
  providedIn: 'root',
})
export class ItemBuildService {
  #jinxItemBuildService = inject(JinxItemBuildService);
  #briarItemBuildService = inject(BriarItemBuildService);

  #itemBuilds: ItemBuild[] = [];

  constructor() {
    this.#itemBuilds = this.#itemBuilds.concat(
      this.#jinxItemBuildService.getItemBuilds(),
      this.#briarItemBuildService.getItemBuilds()
    );
  }

  getItemBuildsByChampion = (champion: ChampionTypes) => {
    return this.#itemBuilds.filter((b) => b.champion === champion);
  };
}
