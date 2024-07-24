import { inject, Injectable } from '@angular/core';
import { ChampionTypes } from '../champion/champion.interface';
import { BriarItemBuildService } from './champ/briar-item-build.service';
import { JinxItemBuildService } from './champ/jinx-item-build.service';
import { ItemBuild } from './item-build.interface';
import { SeraphineItemBuildService } from './champ/seraphine-item-build.service';

@Injectable({
  providedIn: 'root',
})
export class ItemBuildService {
  #jinxItemBuildService = inject(JinxItemBuildService);
  #briarItemBuildService = inject(BriarItemBuildService);
  #seraphineItemBuildService = inject(SeraphineItemBuildService);

  #itemBuilds: ItemBuild[] = [];

  constructor() {
    this.#itemBuilds = this.#itemBuilds.concat(
      this.#jinxItemBuildService.getItemBuilds(),
      this.#briarItemBuildService.getItemBuilds(),
      this.#seraphineItemBuildService.getItemBuilds()
    );
  }

  getItemBuildsByChampion = (champion: ChampionTypes) => {
    return this.#itemBuilds.filter((b) => b.champion === champion);
  };
}
