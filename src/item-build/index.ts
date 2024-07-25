import { JinxItemBuildService } from './champ/jinx-item-build.service';
import { ItemBuildService } from './item-build.service';
import { BriarItemBuildService } from './champ/briar-item-build.service';
import { IllaoiItemBuildService } from './champ/illaoi-item-build.service';
import { SeraphineItemBuildService } from './champ/seraphine-item-build.service';
import { LeonaItemBuildService } from './champ/leona-item-build.service';

export function provideItemBuilds() {
  return [
    ItemBuildService,
    JinxItemBuildService,
    BriarItemBuildService,
    IllaoiItemBuildService,
    SeraphineItemBuildService,
    LeonaItemBuildService,
  ];
}
