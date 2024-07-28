import { inject, Injectable } from '@angular/core';
import { ChampionTypes } from '../champion/champion.interface';
import { BriarItemBuildService } from './champ/briar-item-build.service';
import { JinxItemBuildService } from './champ/jinx-item-build.service';
import { ItemBuild } from './item-build.interface';
import { SeraphineItemBuildService } from './champ/seraphine-item-build.service';
import { IllaoiItemBuildService } from './champ/illaoi-item-build.service';
import { LeonaItemBuildService } from './champ/leona-item-build.service';
import { YasuoItemBuildService } from './champ/yasuo-item-build.service';
import { RivenItemBuildService } from './champ/riven-item-build.service';
import { XayahItemBuildService } from './champ/xayah-item-build.service';
import { AuroraItemBuildService } from './champ/aurora-item-build.service';

@Injectable({
  providedIn: 'root',
})
export class ItemBuildService {
  #jinxItemBuildService = inject(JinxItemBuildService);
  #briarItemBuildService = inject(BriarItemBuildService);
  #seraphineItemBuildService = inject(SeraphineItemBuildService);
  #illaoiItemBuildService = inject(IllaoiItemBuildService);
  #leonaItemBuildService = inject(LeonaItemBuildService);
  #yasuoItemBuildService = inject(YasuoItemBuildService);
  #rivenItemBuildService = inject(RivenItemBuildService);
  #xayahItemBuildService = inject(XayahItemBuildService);
  #auroraItemBuildService = inject(AuroraItemBuildService);

  #itemBuilds: ItemBuild[] = [];

  constructor() {
    this.#itemBuilds = this.#itemBuilds.concat(
      this.#jinxItemBuildService.getItemBuilds(),
      this.#briarItemBuildService.getItemBuilds(),
      this.#seraphineItemBuildService.getItemBuilds(),
      this.#illaoiItemBuildService.getItemBuilds(),
      this.#leonaItemBuildService.getItemBuilds(),
      this.#yasuoItemBuildService.getItemBuilds(),
      this.#rivenItemBuildService.getItemBuilds(),
      this.#xayahItemBuildService.getItemBuilds(),
      this.#auroraItemBuildService.getItemBuilds()
    );
  }

  getItemBuildsByChampion = (champion: ChampionTypes) => {
    return this.#itemBuilds.filter((b) => b.champion === champion);
  };
}
