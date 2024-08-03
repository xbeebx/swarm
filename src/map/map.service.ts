import { Injectable } from '@angular/core';
import {
  Map,
  MapTypes,
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
    },
    {
      name: WAREHOUSE_DISTRICT,
      icon: MAP_ASSETS_FOLDER + 'warehouse_district.png',
    },
    {
      name: THE_OUTSKIRTS,
      icon: MAP_ASSETS_FOLDER + 'the_outskirts.png',
    },
    {
      name: SUBTERRANEAN_LAB,
      icon: MAP_ASSETS_FOLDER + 'subterranean_lab.png',
    },
    {
      name: THE_BEACHHEAD,
      icon: MAP_ASSETS_FOLDER + 'the_beachhead.png',
    },
  ];

  getMaps = () => {
    return this.#maps;
  };

  getMapByName = (map: MapTypes) => {
    return this.#maps.filter((m) => m.name === map)[0];
  };
}
