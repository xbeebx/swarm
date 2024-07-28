import { Injectable } from '@angular/core';
import {
  AREA_SIZE,
  ARMOR,
  Passive,
  PassiveTypes,
  CRITICAL_CHANCE,
  DAMAGE,
  DURATION,
  EXP as EXP,
  ABILITY_HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
  PROJECTILE_COUNT,
} from './passive.interface';

const PASSIVE_ASSETS_FOLDER = 'assets/passives/';

@Injectable({
  providedIn: 'root',
})
export class PassiveService {
  #attributes: Passive[] = [
    {
      name: ABILITY_HASTE,
      icon: PASSIVE_ASSETS_FOLDER + 'ability_haste.png',
      amountPerLevel: '+10',
    },
    {
      name: CRITICAL_CHANCE,
      icon: PASSIVE_ASSETS_FOLDER + 'critical_chance.png',
      amountPerLevel: '+8%',
    },
    {
      name: DAMAGE,
      icon: PASSIVE_ASSETS_FOLDER + 'damage.png',
      amountPerLevel: '+10%',
    },
    {
      name: AREA_SIZE,
      icon: PASSIVE_ASSETS_FOLDER + 'area_size.png',
      amountPerLevel: '+11%',
    },
    {
      name: MAX_HEALTH,
      icon: PASSIVE_ASSETS_FOLDER + 'max_health.png',
      amountPerLevel: '+150',
    },
    {
      name: PROJECTILE_COUNT,
      icon: PASSIVE_ASSETS_FOLDER + 'projectile_count.png',
      amountPerLevel: '1/1/2/2/3',
    },
    {
      name: DURATION,
      icon: PASSIVE_ASSETS_FOLDER + 'duration.png',
      amountPerLevel: '+12%',
    },
    {
      name: MOVEMENT_SPEED,
      icon: PASSIVE_ASSETS_FOLDER + 'movement_speed.png',
      amountPerLevel: '+9%',
    },
    {
      name: HEALTH_REGENERATION,
      icon: PASSIVE_ASSETS_FOLDER + 'health_regeneration.png',
      amountPerLevel: '+4',
    },
    {
      name: PICKUP_RADIUS,
      icon: PASSIVE_ASSETS_FOLDER + 'pickup_radius.png',
      amountPerLevel: '+35%',
    },
    {
      name: ARMOR,
      icon: PASSIVE_ASSETS_FOLDER + 'armor.png',
      amountPerLevel: '+8',
    },
    {
      name: EXP,
      icon: PASSIVE_ASSETS_FOLDER + 'exp.png',
      amountPerLevel: '+10%',
    },
  ];

  getAttributes = () => {
    return this.#attributes;
  };

  getAttributeByName = (name: PassiveTypes) => {
    return this.#attributes.filter((a) => a.name === name)[0];
  };
}
