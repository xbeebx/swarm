import { Injectable } from '@angular/core';

import { NavbarItem } from './navbar.item.interface';

export const TIERLIST = 'Tier list';
export const DIFFICULTIES = 'Difficulties';
export const MAPS = 'Maps';
export const UPGRADES = 'Upgrades';
export const CHAMPIONS = 'Champions';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  #items: NavbarItem[] = [
    { name: TIERLIST, link: '/tierlist', icon: 'ri-tent-fill' },
    {
      name: CHAMPIONS,
      link: '/champions',
      icon: 'ri-team-fill',
    },
    {
      name: DIFFICULTIES,
      link: '/difficulties',
      icon: 'ri-stack-fill',
    },
    {
      name: MAPS,
      link: '/maps',
      icon: 'ri-earth-fill',
    },
    {
      name: UPGRADES,
      link: '/upgrades',
      icon: 'ri-arrow-up-double-fill',
    },
  ];

  getItems = () => {
    return this.#items;
  };

  getItemByName = (name: string) => {
    return this.#items.filter((item) => item.name === name)[0];
  };
}
