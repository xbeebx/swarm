import { Injectable } from '@angular/core';
import {
  AREA_SIZE,
  ARMOR,
  Attribute,
  AttributeTypes,
  CRIT_CHANCE,
  DAMAGE,
  DURATION,
  EXPERIENCE,
  HASTE,
  HEALTH_REGENERATION,
  MAX_HEALTH,
  MOVEMENT_SPEED,
  PICKUP_RADIUS,
  PROJECTILES,
} from './attribute.interface';

const ATTRIBUTE_ASSETS_FOLDER = 'assets/attributes/';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  #attributes: Attribute[] = [
    {
      name: HASTE,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'haste.png',
    },
    {
      name: CRIT_CHANCE,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'crit_chance.png',
    },
    {
      name: DAMAGE,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'damage.png',
    },
    {
      name: AREA_SIZE,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'area_size.png',
    },
    {
      name: MAX_HEALTH,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'max_health.png',
    },
    {
      name: PROJECTILES,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'projectiles.png',
    },
    {
      name: DURATION,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'duration.png',
    },
    {
      name: MOVEMENT_SPEED,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'movement_speed.png',
    },
    {
      name: HEALTH_REGENERATION,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'health_regeneration.png',
    },
    {
      name: PICKUP_RADIUS,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'pickup_radius.png',
    },
    {
      name: ARMOR,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'armor.png',
    },
    {
      name: EXPERIENCE,
      icon: ATTRIBUTE_ASSETS_FOLDER + 'experience.png',
    },
  ];

  getAttributes = () => {
    return this.#attributes;
  };

  getAttributeByName = (name: AttributeTypes) => {
    return this.#attributes.filter((a) => a.name === name)[0];
  };
}
