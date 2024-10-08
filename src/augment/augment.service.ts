import { Injectable } from '@angular/core';
import {
  Augment,
  AugmentTypes,
  CARD_COLLECTOR,
  CROSS_COUNTRY,
  GATHERING_SPEED,
  RAMMING_RUNNER,
  ULTIMATE_SPEED_UP,
  UPTIME_UPGRADE,
  WITH_HASTE,
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
    {
      name: ULTIMATE_SPEED_UP,
      icon: AUGMENT_ASSETS_FOLDER + 'ultimate_speed_up.png',
      desc: 'Gain <strong>100 Ability Haste</strong>.',
    },
    {
      name: UPTIME_UPGRADE,
      icon: AUGMENT_ASSETS_FOLDER + 'uptime_upgrade.png',
      desc: 'Gain <strong>60% Duration</strong>.',
    },
    {
      name: CARD_COLLECTOR,
      icon: AUGMENT_ASSETS_FOLDER + 'card_collector.png',
      desc: '<strong>Each Access Card upgrade</strong> you pick up <strong>increases</strong> your <strong>damage by 5%</strong>. This is a very strong upgrade when found in early-mid stages. It’s not as strong once you start to get close to level 35.',
    },
    {
      name: GATHERING_SPEED,
      icon: AUGMENT_ASSETS_FOLDER + 'gathering_speed.png',
      desc: 'Lose <strong>15% total Movement Speed</strong>, but gain <strong>+3% Movement Speed</strong> every time you level up.',
    },
    {
      name: WITH_HASTE,
      icon: AUGMENT_ASSETS_FOLDER + 'with_haste.png',
      desc: 'Gain <strong>+1% Movement Speed</strong> for every <strong>2 Ability Haste</strong> you have.',
    },
  ];

  getAugments = () => {
    return this.#augments;
  };

  getAugmentByName = (augment: AugmentTypes) => {
    return this.#augments.filter((a) => a.name === augment)[0];
  };
}
