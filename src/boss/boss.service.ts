import { Injectable } from '@angular/core';
import {
  AATROX,
  BELVETH,
  Boss,
  BossTypes,
  BRIAR,
  REKSAI,
} from './boss.interface';

const BOSS_ASSETS_FOLDER = 'assets/bosses/';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  #bosses: Boss[] = [
    {
      name: REKSAI,
      icon: BOSS_ASSETS_FOLDER + 'reksai.png',
    },
    {
      name: BRIAR,
      icon: BOSS_ASSETS_FOLDER + 'briar.png',
    },
    {
      name: BELVETH,
      icon: BOSS_ASSETS_FOLDER + 'belveth.png',
    },
    {
      name: AATROX,
      icon: BOSS_ASSETS_FOLDER + 'aatrox.png',
    },
  ];

  getBosses = () => {
    return this.#bosses;
  };

  getBossByName = (boss: BossTypes) => {
    return this.#bosses.filter((b) => b.name === boss)[0];
  };
}
