import { inject, Injectable } from '@angular/core';

import { NavbarItem } from './navbar.item.interface';
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

export const TIERLIST = 'Tier list';
export const DIFFICULTIES = 'Difficulties';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  #championService = inject(ChampionService);

  #items: NavbarItem[] = [
    { name: TIERLIST, link: '/tierlist', icon: 'assets/tierlist.png' },
    {
      name: DIFFICULTIES,
      link: '/difficulties',
      icon: 'assets/difficulties.png',
    },
    {
      name: JINX,
      link: '/jinx',
      icon: this.#championService.getChampionByName(JINX).icon,
    },
    {
      name: SERAPHINE,
      link: '/seraphine',
      icon: this.#championService.getChampionByName(SERAPHINE).icon,
    },
    {
      name: ILLAOI,
      link: '/illaoi',
      icon: this.#championService.getChampionByName(ILLAOI).icon,
    },
    {
      name: LEONA,
      link: '/leona',
      icon: this.#championService.getChampionByName(LEONA).icon,
    },
    {
      name: YASUO,
      link: '/yasuo',
      icon: this.#championService.getChampionByName(YASUO).icon,
    },
    {
      name: RIVEN,
      link: '/riven',
      icon: this.#championService.getChampionByName(RIVEN).icon,
    },
    {
      name: XAYAH,
      link: '/xayah',
      icon: this.#championService.getChampionByName(XAYAH).icon,
    },
    {
      name: BRIAR,
      link: '/briar',
      icon: this.#championService.getChampionByName(BRIAR).icon,
    },
    {
      name: AURORA,
      link: '/aurora',
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
