import { inject, Injectable } from '@angular/core';

import { NavbarItem } from './champions-navbar.item.interface';
import {
  AURORA,
  BRIAR,
  ILLAOI,
  JINX,
  LEONA,
  RIVEN,
  SERAPHINE,
  XAYAH,
  YASUO,
} from '../../champion/champion.interface';
import { ChampionService } from '../../champion/champion.service';

export const CHAMPIONS_PATH = '/champions';

@Injectable({
  providedIn: 'root',
})
export class ChampionNavigationService {
  #championService = inject(ChampionService);

  #items: NavbarItem[] = [
    {
      name: JINX,
      link: CHAMPIONS_PATH + '/jinx',
      icon: this.#championService.getChampionByName(JINX).icon,
    },
    {
      name: SERAPHINE,
      link: CHAMPIONS_PATH + '/seraphine',
      icon: this.#championService.getChampionByName(SERAPHINE).icon,
    },
    {
      name: ILLAOI,
      link: CHAMPIONS_PATH + '/illaoi',
      icon: this.#championService.getChampionByName(ILLAOI).icon,
    },
    {
      name: LEONA,
      link: CHAMPIONS_PATH + '/leona',
      icon: this.#championService.getChampionByName(LEONA).icon,
    },
    {
      name: YASUO,
      link: CHAMPIONS_PATH + '/yasuo',
      icon: this.#championService.getChampionByName(YASUO).icon,
    },
    {
      name: RIVEN,
      link: CHAMPIONS_PATH + '/riven',
      icon: this.#championService.getChampionByName(RIVEN).icon,
    },
    {
      name: XAYAH,
      link: CHAMPIONS_PATH + '/xayah',
      icon: this.#championService.getChampionByName(XAYAH).icon,
    },
    {
      name: BRIAR,
      link: CHAMPIONS_PATH + '/briar',
      icon: this.#championService.getChampionByName(BRIAR).icon,
    },
    {
      name: AURORA,
      link: CHAMPIONS_PATH + '/aurora',
      icon: this.#championService.getChampionByName(AURORA).icon,
    },
  ];

  getItems = () => {
    return this.#items;
  };

  getItemByName = (name: string) => {
    return this.#items.filter((item) => item.name === name)[0];
  };
}
