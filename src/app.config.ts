import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTier } from './tier';
import { provideChampions } from './champion';
import { provideWeapons } from './weapon';
import { provideAbilities } from './ability';
import { provideItemBuilds } from './item-build';
import { provideAugments } from './augment';
import { providePassives } from './passive';
import { provideUpgrades } from './upgrades';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideTier(),
    provideChampions(),
    provideWeapons(),
    provideAbilities(),
    provideItemBuilds(),
    provideAugments(),
    providePassives(),
    provideUpgrades(),
  ],
};
