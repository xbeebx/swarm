import { JinxItemBuildService } from './champ/jinx-item-build.service';
import { ItemBuildService } from './item-build.service';
import { BriarItemBuildService } from './champ/briar-item-build.service';

export function provideItemBuilds() {
  return [ItemBuildService, JinxItemBuildService, BriarItemBuildService];
}
