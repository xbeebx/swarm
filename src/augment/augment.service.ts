import { Injectable } from '@angular/core';
import {
  Augment,
  AugmentTypes,
  CROSS_COUNTRY,
  RAMMING_RUNNER,
} from './augment.interface';

const AUGMENT_ASSETS_FOLDER = 'assets/augments/';

@Injectable({
  providedIn: 'root',
})
export class AugmentService {
  #augments: Augment[] = [
    {
      name: RAMMING_RUNNER,
      icon: AUGMENT_ASSETS_FOLDER + 'ramming_runner.png',
      desc: 'Gain <strong>10% movement speed</strong>. Gain or lose <strong>1% damage</strong> for every <strong>1% bonus movement speed</strong> you acquire or lose.',
    },
    {
      name: CROSS_COUNTRY,
      icon: AUGMENT_ASSETS_FOLDER + 'cross_country.png',
      desc: 'For every <strong>10.000 units traveled</strong>, gain <strong>+5% damage</strong>, <strong>+10% maximum health</strong>, and <strong>+10% area size</strong>.',
    },
  ];

  getAugments = () => {
    return this.#augments;
  };

  getAugmentByName = (name: AugmentTypes) => {
    return this.#augments.filter((a) => a.name === name)[0];
  };
}
