import { Injectable } from '@angular/core';
import {
  Map,
  MapTypes,
  MATCHMAKING_ISLAND,
  SUBTERRANEAN_LAB,
  THE_BEACHHEAD,
  THE_FINAL_CITY,
  THE_OUTSKIRTS,
  WAREHOUSE_DISTRICT,
} from './map.interface';

const MAP_ASSETS_FOLDER = 'assets/maps/';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  #maps: Map[] = [
    {
      name: THE_FINAL_CITY,
      icon: MAP_ASSETS_FOLDER + 'the_final_city.png',
      combination: true,
      part: 0,
    },
    {
      name: MATCHMAKING_ISLAND,
      combination: true,
      part: 0,
    },
    {
      name: WAREHOUSE_DISTRICT,
      icon: MAP_ASSETS_FOLDER + 'warehouse_district.png',
      part: 1,
    },
    {
      name: THE_OUTSKIRTS,
      icon: MAP_ASSETS_FOLDER + 'the_outskirts.png',
      part: 2,
    },
    {
      name: SUBTERRANEAN_LAB,
      icon: MAP_ASSETS_FOLDER + 'subterranean_lab.png',
      part: 3,
    },
    {
      name: THE_BEACHHEAD,
      icon: MAP_ASSETS_FOLDER + 'the_beachhead.png',
      part: 4,
    },
  ];

  getMaps = () => {
    return this.#maps;
  };

  getMapByName = (map: MapTypes) => {
    return this.#maps.filter((m) => m.name === map)[0];
  };

  getMapsWithOutGlobal = () => {
    return this.#maps.filter(
      (m) => m.name !== THE_FINAL_CITY && m.name !== MATCHMAKING_ISLAND
    );
  };
}
