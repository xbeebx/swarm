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
  GAIN_GOLD,
  HEAL_HP,
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
      availableByDefault: false,
    },
    {
      name: CRITICAL_CHANCE,
      icon: PASSIVE_ASSETS_FOLDER + 'critical_chance.png',
      amountPerLevel: '+8%',
      availableByDefault: false,
    },
    {
      name: DAMAGE,
      icon: PASSIVE_ASSETS_FOLDER + 'damage.png',
      amountPerLevel: '+10%',
      availableByDefault: true,
    },
    {
      name: AREA_SIZE,
      icon: PASSIVE_ASSETS_FOLDER + 'area_size.png',
      amountPerLevel: '+11%',
      availableByDefault: false,
    },
    {
      name: MAX_HEALTH,
      icon: PASSIVE_ASSETS_FOLDER + 'max_health.png',
      amountPerLevel: '+150',
      availableByDefault: true,
    },
    {
      name: PROJECTILE_COUNT,
      icon: PASSIVE_ASSETS_FOLDER + 'projectile_count.png',
      amountPerLevel: '1/1/2/2/3',
      availableByDefault: false,
    },
    {
      name: DURATION,
      icon: PASSIVE_ASSETS_FOLDER + 'duration.png',
      amountPerLevel: '+12%',
      availableByDefault: false,
    },
    {
      name: MOVEMENT_SPEED,
      icon: PASSIVE_ASSETS_FOLDER + 'movement_speed.png',
      amountPerLevel: '+9%',
      availableByDefault: false,
    },
    {
      name: HEALTH_REGENERATION,
      icon: PASSIVE_ASSETS_FOLDER + 'health_regeneration.png',
      amountPerLevel: '+4',
      availableByDefault: false,
    },
    {
      name: PICKUP_RADIUS,
      icon: PASSIVE_ASSETS_FOLDER + 'pickup_radius.png',
      amountPerLevel: '+35%',
      availableByDefault: false,
    },
    {
      name: ARMOR,
      icon: PASSIVE_ASSETS_FOLDER + 'armor.png',
      amountPerLevel: '+8',
      availableByDefault: true,
    },
    {
      name: EXP,
      icon: PASSIVE_ASSETS_FOLDER + 'exp.png',
      amountPerLevel: '+10%',
      availableByDefault: false,
    },
    {
      name: GAIN_GOLD,
      icon: PASSIVE_ASSETS_FOLDER + 'gain_gold.png',
      amountPerLevel: 'At full build',
      availableByDefault: true,
    },
    {
      name: HEAL_HP,
      icon: PASSIVE_ASSETS_FOLDER + 'heal_hp.png',
      amountPerLevel: 'At full build',
      availableByDefault: true,
    },
  ];

  getAttributes = () => {
    return this.#attributes;
  };

  getAttributeByName = (name: PassiveTypes) => {
    return this.#attributes.filter((a) => a.name === name)[0];
  };
}
